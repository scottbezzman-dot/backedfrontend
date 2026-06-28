import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notifications } from "@/data/notifications";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/axios-config";

type HeaderProps = {
  coins: any[];
};

export default function Header1({ coins }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await apiClient.get("/api/auth/get_users");
        if (res.data && res.data.user) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.error("Error fetching user in Header1:", error);
      }
    };
    fetchUser();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".avatar-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/log-in");
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (!debouncedValue) {
      setResults([]);
      return;
    }
    const filtered = coins
      .filter((coin) =>
        Object.keys(coin.unique_id)[0]
          .toLowerCase()
          .includes(debouncedValue.toLowerCase())
      );
    setResults(filtered);
  }, [debouncedValue]);

  const handleClear = useCallback(() => {
    setSearchTerm("");
    setResults([]);
  }, []);

  return (
    <>
      <div className="header-style2 fixed-top bg-menuDark">
        <div className="d-flex justify-content-between align-items-center gap-14">
          <div className="box-account style-2">
            <div className="avatar-menu-container" style={{ position: "relative" }}>
              <div
                onClick={toggleMenu}
                style={{ cursor: "pointer", display: "inline-block" }}
              >
                <Image
                  alt="img"
                  className="avt"
                  src="/images/avt/avt2.jpg"
                  width={120}
                  height={120}
                  style={{
                    border: isMenuOpen ? "2.5px solid #00b050" : "1.5px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "block",
                    transition: "all 0.2s ease-in-out",
                  }}
                />
              </div>

              {isMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    backgroundColor: "rgba(28, 28, 30, 0.96)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "12px",
                    padding: "12px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                    zIndex: 9999,
                    minWidth: "220px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {/* User info header */}
                  {user && (
                    <div style={{ padding: "6px 8px 10px 8px" }}>
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "15px",
                          color: "#fff",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {user.name}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#aaa",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          marginBottom: "8px",
                        }}
                      >
                        {user.email}
                      </div>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 8px",
                          borderRadius: "20px",
                          fontSize: "10px",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          backgroundColor: user.role === "admin" ? "rgba(0, 176, 80, 0.15)" : "rgba(255, 255, 255, 0.1)",
                          color: user.role === "admin" ? "#00b050" : "#ccc",
                          border: user.role === "admin" ? "1px solid rgba(0, 176, 80, 0.3)" : "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        {user.role === "admin" ? "👑 Admin" : "👤 User"}
                      </span>
                    </div>
                  )}

                  <hr style={{ margin: "6px 0", borderColor: "rgba(255, 255, 255, 0.08)" }} />

                  {/* General Links */}
                  {user && (
                    <>
                      <Link
                        href="/user-info"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "8px 10px",
                          color: "#eee",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontSize: "14px",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#eee";
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span style={{ fontSize: "16px" }}>👤</span>
                        <span>User Info</span>
                      </Link>

                      {/* Admin Links */}
                      {user.role === "admin" && (
                        <Link
                          href="/admin"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "8px 10px",
                            color: "#eee",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontSize: "14px",
                            transition: "all 0.15s ease",
                            marginTop: "4px"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#eee";
                          }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span style={{ fontSize: "16px" }}>👑</span>
                          <span>Admin Panel</span>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="search-box box-input-field style-2" style={{ position: "relative" }}>
              <a href={`/home-search`} className="icon-search" />
              <input
                type="text"
                placeholder="Looking for crypto"
                required
                className="clear-ip"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <i
                  className="icon-close"
                  style={{ cursor: "pointer" }}
                  onClick={handleClear}
                />
              )}
              {searchTerm && (
                results.length > 0 ? (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "100%",
                      backgroundColor: "#393737",
                      color: "#fff",
                      border: "1px solid #333",
                      borderRadius: "4px",
                      marginTop: "4px",
                      zIndex: 1000,
                    }}
                  >
                    {results.map((item, idx) => {
                      const coinId = Object.keys(item?.unique_id)[0];
                      return (
                        <div
                          key={idx}
                          style={{
                            padding: "10px",
                            cursor: "pointer",
                            fontSize: "14px",
                            borderBottom:
                              idx !== results.length - 1 ? "1px solid #333" : "none",
                          }}
                          onClick={() => {
                            console
                            setSearchTerm(item);
                            setResults([]);
                            router.push(`/coin/${item?.name}`)
                          }}
                        >
                          {coinId}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "100%",
                      backgroundColor: "#393737",
                      color: "#fff",
                      border: "1px solid #333",
                      borderRadius: "4px",
                      marginTop: "4px",
                      zIndex: 1000,
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: "14px",
                    }}
                  >
                    No Result Found
                  </div>
                )
              )}
            </div>
          </div>
          <div className="d-flex align-items-center gap-8">
            {/* <Link href={`/list-blog`} className="icon-gift" /> */}
            <a
              href="#notification"
              className="icon-noti box-noti"
              data-bs-toggle="modal"
            />
          </div>
        </div>
      </div>{" "}
      <div className="modal fade modalRight" id="notification">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Notification</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-12">
                  {notifications.map((notification, index) => (
                    <li className={notification.additionalClasses} key={index}>
                      <div className="noti-item bg-menuDark">
                        <div
                          className={`pb-8 ${notification.link ? "line-bt" : ""
                            }`}
                        >
                          <p
                            className={`text-button fw-6 ${notification.isSecondary ? "text-secondary" : ""
                              }`}
                          >
                            {notification.content}
                          </p>
                        </div>
                        {notification.link && (
                          <Link
                            className="d-block mt-8"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                            href={notification.link}
                          >
                            Click to Check
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}