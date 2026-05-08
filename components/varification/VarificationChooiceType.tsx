"use client";

import { useRef, useState } from "react";
import GoBackButton from "../BackButton";
import { toast } from "react-toastify";
import apiClient from "@/lib/axios-config";

// Define the type for the items in the list
interface Item {
  label?: string;
  value: string;
}

const items: Item[] = [
  { label: "Citizen identification", value: "citizen_id" },
  { label: "Driving license", value: "driving_license" },
  { label: "ID card", value: "id_card" },
  { label: "Passport", value: "passport" },
];
export default function VarificationChooiceType() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    country: "",
    address: "",
    idType: "",
    idImage: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const maxSize = 8 * 1024 * 1024; // 8MB
      if (!file.type.startsWith("image/")) {
        setFormData((prev) => ({ ...prev, [name]: null }));
        setErrors((prev) => ({ ...prev, [name]: "Only image files allowed" }));
        return;
      }
      if (file.size > maxSize) {
        setFormData((prev) => ({ ...prev, [name]: null }));
        setErrors((prev) => ({ ...prev, [name]: "File too large (max 8MB)" }));
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: file }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: null }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectItem = (item: Item) => {
    setFormData((prev) => ({ ...prev, idType: item.value }));
    setErrors((prev) => ({ ...prev, idType: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.idType) newErrors.idType = "Please select an ID type";
    if (!formData.idImage) newErrors.idImage = "Please upload ID Image";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const file = formData.idImage;
    if (file) {
      const maxSize = 8 * 1024 * 1024;
      if (file.size > maxSize) {
        setErrors((p: any) => ({ ...p, transactionImg: "File too large (max 8MB)" }));
        return;
      }
      if (!file.type.startsWith("image/")) {
        setErrors((p: any) => ({ ...p, transactionImg: "Only image files allowed" }));
        return;
      }
    }

    try {
      const fd = new FormData();
      fd.append("firstName", formData.firstName);
      fd.append("lastName", formData.lastName);
      fd.append("dob", formData.dob);
      fd.append("country", formData.country);
      fd.append("address", formData.address);
      fd.append("idType", formData.idType);

      if (file) fd.append("image", file, file.name);

      const response = await apiClient.post("/api/auth/add_verification_users", fd, {
        headers: { "Content-Type": undefined as any },
      });

      if (response?.data?.status_code) {
        toast.success("Transaction submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          country: "",
          address: "",
          idType: "",
          idImage: null,
        });
        setErrors({});
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast.error(response?.data?.message || "Something went wrong!");
      }
    } catch (error: any) {
      console.error("Error submitting transaction:", error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to submit transaction");
      }
    }
  };

  const idLabel = items.find((i) => i.value === formData.idType)?.label || "Select ID type";

  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="/verification" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Verification</h3>
        <a href="#" className="right">
          <i className="icon-question" />
        </a>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <h4 className="mt-4">Choose the type of identification document</h4>
          <form onSubmit={handleSubmit} className="mt-20">
            <fieldset>
              <label className="mb-8">First name</label>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="tf-input mb-8"
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-danger small">{errors.firstName}</p>
              )}
            </fieldset>
            <fieldset className="mt-20">
              <label className="mb-8">Last name</label>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="tf-input mb-8"
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-danger small">{errors.lastName}</p>
              )}
            </fieldset>
            <fieldset className="mt-12">
              <label className="mb-8">Date of birth</label>
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="tf-input mb-8"
              />
              {errors.dob && (
                <p className="text-danger small">{errors.dob}</p>
              )}
            </fieldset>
            <fieldset className="mt-12">
              <label className="mb-8">Country/region of residence</label>
              <div className="select-wrapper">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="tf-select"
                >
                  <option value="">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="ENG">ENG</option>
                  <option value="INDIA">INDIA</option>
                </select>
              </div>
              {errors.country && (
                <p className="text-danger small">{errors.country}</p>
              )}
            </fieldset>
            <fieldset className="mt-12">
              <label className="mb-8">Address</label>
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="tf-input"
                placeholder="Street address"
              />
              {errors.address && (
                <p className="text-danger small">{errors.address}</p>
              )}
            </fieldset>
            <fieldset className="mt-20">
              <label className="mb-8">Type of identification (ID)</label>
              <div
                className="select-wrapper"
                data-bs-toggle="modal"
                data-bs-target="#identificationID"
                role="button"
              >
                <p className="tf-select dom-text">{idLabel}</p>
              </div>
              {errors.idType && (
                <p className="text-danger small">{errors.idType}</p>
              )}
            </fieldset>
            <fieldset className="mt-16" style={{display:"flex", flexDirection:"column"}}>
              <label className="mb-8">Upload ID Image</label>
              <input
                name="idImage"
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="tf-input"
              />
              {formData.idImage && (
                <p className="small">Selected file: {(formData.idImage as File).name}</p>
              )}
              {errors.idImage && <p className="text-danger small">{errors.idImage}</p>}
            </fieldset>
            <button type="submit" className="tf-btn lg primary mt-40">Verify</button>
          </form>
        </div>
      </div>
      <div className="modal fade action-sheet" id="identificationID">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Type of identification (ID)</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="pb-16">
              {items.map((item) => {
                const active = item.value === formData.idType;
                return (
                  <li
                    onClick={() => handleSelectItem(item)}
                    key={item.value}
                    className={`line-bt`}
                    data-bs-dismiss="modal"
                  >
                    <div
                      className={`d-flex justify-content-between gap-8 text-large item-check dom-value ${
                        active ? " active" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      {active ? <i className="icon icon-check-circle" /> : <i />}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
