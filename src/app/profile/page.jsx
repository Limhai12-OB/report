"use client";

import { useState, useRef } from "react";

const styles = {
  topbar: {
    background: "#fff",
    borderBottom: "1px solid #e2e8f0",
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    gap: 16,
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "Sora, sans-serif",
    fontWeight: 700,
    fontSize: 17,
    color: "#1a202c",
    minWidth: 160,
  },
  logoIcon: {
    width: 32,
    height: 32,
    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 14,
  },
  searchBar: {
    flex: 1,
    maxWidth: 380,
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#f0f4f8",
    border: "1px solid #e2e8f0",
    borderRadius: 24,
    padding: "8px 16px",
    color: "#718096",
    fontSize: 14,
  },
  topbarRight: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#f0f4f8",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#718096",
    fontSize: 16,
  },
  userMeta: { display: "flex", flexDirection: "column" },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 600,
    fontSize: 14,
  },
  layout: { display: "flex", flex: 1, overflow: "hidden" },
  sidebar: {
    width: 200,
    background: "#fff",
    borderRight: "1px solid #e2e8f0",
    padding: "28px 0",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  navItem: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 20px",
    fontSize: 14,
    color: active ? "#4f46e5" : "#718096",
    cursor: "pointer",
    borderLeft: active ? "3px solid #4f46e5" : "3px solid transparent",
    background: active ? "#eef2ff" : "transparent",
    fontWeight: active ? 500 : 400,
    transition: "all 0.15s",
  }),
  main: { flex: 1, padding: 32, overflowY: "auto" },
  pageTitle: {
    fontFamily: "Sora, sans-serif",
    fontSize: 20,
    fontWeight: 600,
    color: "#1a202c",
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1px solid #e2e8f0",
  },
  profileHeaderCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: "24px 28px",
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  profilePhotoWrap: {
    position: "relative",
    width: 72,
    height: 72,
    flexShrink: 0,
  },
  profilePhoto: {
    width: 72,
    height: 72,
    borderRadius: 12,
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    color: "#fff",
    fontWeight: 700,
    fontFamily: "Sora, sans-serif",
    overflow: "hidden",
  },
  photoEditBtn: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 22,
    height: 22,
    background: "#4f46e5",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 10,
    cursor: "pointer",
    border: "2px solid #fff",
  },
  profileInfo: { flex: 1 },
  genBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    background: "#f0f4ff",
    color: "#4f46e5",
    fontSize: 12,
    fontWeight: 500,
    padding: "3px 10px",
    borderRadius: 20,
    marginTop: 8,
    border: "1px solid #c7d2fe",
  },
  editBtn: {
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "10px 20px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  bottomGrid: { display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 },
  card: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: 24,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  cardTitle: {
    fontFamily: "Sora, sans-serif",
    fontSize: 15,
    fontWeight: 600,
    color: "#1a202c",
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fieldGroup: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  field: { display: "flex", flexDirection: "column", gap: 5 },
  fieldLabel: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#a0aec0",
  },
  fieldValue: {
    background: "#f0f4f8",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    color: "#1a202c",
    minHeight: 40,
    display: "flex",
    alignItems: "center",
  },
  rightCol: { display: "flex", flexDirection: "column", gap: 20 },
  subjectsList: { display: "flex", flexWrap: "wrap", gap: 8 },
  subjectTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "#dbeafe",
    color: "#1d4ed8",
    fontSize: 12,
    fontWeight: 500,
    padding: "5px 12px",
    borderRadius: 6,
    border: "1px solid #bfdbfe",
  },
  addSubjectBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    background: "transparent",
    color: "#718096",
    fontSize: 12,
    padding: "5px 10px",
    borderRadius: 6,
    border: "1.5px dashed #e2e8f0",
    cursor: "pointer",
    fontFamily: "DM Sans, sans-serif",
  },
  securityRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: "#f0f4f8",
    borderRadius: 8,
    border: "1px solid #e2e8f0",
  },
  securityText: { flex: 1 },
  changeBtn: {
    background: "none",
    border: "none",
    color: "#4f46e5",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "DM Sans, sans-serif",
    padding: "4px 8px",
    borderRadius: 4,
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(4px)",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    borderRadius: 16,
    padding: 32,
    width: 560,
    maxWidth: "95vw",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#f0f4f8",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#718096",
  },
  modalPhotoSection: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: 20,
    background: "#f0f4f8",
    borderRadius: 12,
    marginBottom: 24,
  },
  modalPhoto: {
    width: 64,
    height: 64,
    borderRadius: 10,
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: 700,
    overflow: "hidden",
    flexShrink: 0,
  },
  uploadBtn: {
    background: "#eef2ff",
    color: "#4f46e5",
    border: "1.5px dashed #4f46e5",
    borderRadius: 8,
    padding: "8px 16px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    display: "inline-block",
  },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  formField: { display: "flex", flexDirection: "column", gap: 6 },
  formLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#a0aec0",
  },
  formInput: {
    background: "#f0f4f8",
    border: "1.5px solid #e2e8f0",
    borderRadius: 8,
    padding: "10px 14px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 14,
    color: "#1a202c",
    outline: "none",
    width: "100%",
  },
  modalActions: {
    display: "flex",
    gap: 12,
    justifyContent: "flex-end",
    marginTop: 28,
    paddingTop: 20,
    borderTop: "1px solid #e2e8f0",
  },
  btnCancel: {
    background: "#f0f4f8",
    border: "1px solid #e2e8f0",
    color: "#718096",
    padding: "10px 20px",
    borderRadius: 8,
    fontFamily: "DM Sans, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
  },
  btnSave: {
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "10px 24px",
    borderRadius: 8,
    fontFamily: "DM Sans, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
  toast: (show, error) => ({
    position: "fixed",
    bottom: 24,
    right: 24,
    background: error ? "#ef4444" : "#10b981",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 500,
    zIndex: 200,
    display: show ? "flex" : "none",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 8px 24px rgba(16,185,129,0.3)",
    transition: "all 0.3s",
  }),
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const navItems = [
  { icon: "⊞", label: "Dashboard" },
  { icon: "✓", label: "Task Management" },
  { icon: "📅", label: "Calendar" },
  { icon: "📊", label: "Report" },
  { icon: "👤", label: "Profile" },
  { icon: "↩", label: "Logout" },
];

export default function HRDRoomProfile() {
  const [profile, setProfile] = useState({
    name: "Deap Sokreaksmey",
    email: "sokreaksmey.deap@kshrd.edu.kh",
    role: "Instructor at Korea Software HRD Center",
    gender: "Male",
    dob: "1992-10-14",
    address: "No. 12, St. 2004, Phnom Penh, Cambodia",
    gen: "13th Gen",
    photo: null,
  });

  const [editData, setEditData] = useState({ ...profile });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [subjects, setSubjects] = useState([
    "Java Programming",
    "iOS Development",
  ]);
  const [newSubject, setNewSubject] = useState("");
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [pwdData, setPwdData] = useState({
    current: "",
    newPwd: "",
    confirm: "",
  });
  const [pwdChanged, setPwdChanged] = useState("Last changed 5 months ago");
  const [toast, setToast] = useState({ show: false, msg: "", error: false });
  const fileRef = useRef();

  const showToast = (msg, error = false) => {
    setToast({ show: true, msg, error });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3000);
  };

  const openEditModal = () => {
    setEditData({ ...profile });
    setShowEditModal(true);
  };

  const saveProfile = () => {
    setProfile({ ...editData });
    setShowEditModal(false);
    showToast("Profile updated successfully!");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) =>
      setEditData((d) => ({ ...d, photo: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const savePwd = () => {
    if (!pwdData.current || !pwdData.newPwd || !pwdData.confirm) {
      showToast("Please fill all fields", true);
      return;
    }
    if (pwdData.newPwd !== pwdData.confirm) {
      showToast("Passwords do not match", true);
      return;
    }
    if (pwdData.newPwd.length < 6) {
      showToast("Password must be 6+ characters", true);
      return;
    }
    setPwdChanged("Last changed just now");
    setPwdData({ current: "", newPwd: "", confirm: "" });
    setShowPwdModal(false);
    showToast("Password updated!");
  };

  const removeSubject = (i) =>
    setSubjects((s) => s.filter((_, idx) => idx !== i));

  const addSubject = () => {
    if (!newSubject.trim()) return;
    setSubjects((s) => [...s, newSubject.trim()]);
    setNewSubject("");
    setShowAddSubject(false);
  };

  const initial = profile.name ? profile.name[0].toUpperCase() : "?";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "DM Sans, sans-serif",
        background: "#f0f4f8",
      }}
    >
      {/* TOPBAR */}
      <div style={styles.topbar}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>🎓</div>
          HRD Room
        </div>
        <div style={styles.searchBar}>🔍 Search Task</div>
        <div style={styles.topbarRight}>
          <button style={styles.iconBtn}>🔔</button>
          <button style={styles.iconBtn}>💬</button>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={styles.avatar}>{initial}</div>
            <div style={styles.userMeta}>
              <strong style={{ fontSize: 13, color: "#1a202c" }}>
                {profile.name.split(" ")[0]}
              </strong>
              <span style={{ fontSize: 11, color: "#718096" }}>
                {profile.email}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.layout}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          {navItems.map(({ icon, label }) => (
            <div key={label} style={styles.navItem(label === "Profile")}>
              <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div style={styles.main}>
          <div style={styles.pageTitle}>Profile</div>

          {/* Header Card */}
          <div style={styles.profileHeaderCard}>
            <div style={styles.profilePhotoWrap}>
              <div style={styles.profilePhoto}>
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="profile"
                  />
                ) : (
                  initial
                )}
              </div>
              <div style={styles.photoEditBtn} onClick={openEditModal}>
                ✏️
              </div>
            </div>
            <div style={styles.profileInfo}>
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1a202c",
                }}
              >
                {profile.name}
              </h2>
              <p style={{ fontSize: 13, color: "#718096", marginTop: 2 }}>
                {profile.role}
              </p>
              <div style={styles.genBadge}>👤 {profile.gen}</div>
            </div>
            <button style={styles.editBtn} onClick={openEditModal}>
              Edit Profile
            </button>
          </div>

          {/* Bottom Grid */}
          <div style={styles.bottomGrid}>
            {/* Personal Info */}
            <div style={styles.card}>
              <div style={styles.cardTitle}>
                Personal Information
                <span style={{ color: "#a0aec0", fontSize: 14 }}>ℹ️</span>
              </div>
              <div style={styles.fieldGroup}>
                {[
                  { label: "Full Name", value: profile.name },
                  { label: "Email Address", value: profile.email },
                  { label: "Gender", value: profile.gender },
                  { label: "Date of Birth", value: formatDate(profile.dob) },
                ].map(({ label, value }) => (
                  <div key={label} style={styles.field}>
                    <label style={styles.fieldLabel}>{label}</label>
                    <div style={styles.fieldValue}>{value}</div>
                  </div>
                ))}
                <div style={{ ...styles.field, gridColumn: "1 / -1" }}>
                  <label style={styles.fieldLabel}>Address</label>
                  <div style={styles.fieldValue}>{profile.address}</div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div style={styles.rightCol}>
              {/* Subjects */}
              <div style={styles.card}>
                <div style={styles.cardTitle}>Subjects Taught</div>
                <div style={styles.subjectsList}>
                  {subjects.map((s, i) => (
                    <span key={i} style={styles.subjectTag}>
                      📖 {s}
                      <span
                        onClick={() => removeSubject(i)}
                        style={{
                          marginLeft: 4,
                          cursor: "pointer",
                          opacity: 0.6,
                          fontSize: 10,
                        }}
                      >
                        ✕
                      </span>
                    </span>
                  ))}
                  {showAddSubject ? (
                    <div
                      style={{ display: "flex", gap: 6, alignItems: "center" }}
                    >
                      <input
                        autoFocus
                        value={newSubject}
                        onChange={(e) => setNewSubject(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addSubject()}
                        placeholder="Subject name"
                        style={{
                          ...styles.formInput,
                          width: 140,
                          padding: "4px 10px",
                          fontSize: 12,
                        }}
                      />
                      <button
                        onClick={addSubject}
                        style={{
                          ...styles.btnSave,
                          padding: "4px 10px",
                          fontSize: 12,
                        }}
                      >
                        Add
                      </button>
                      <button
                        onClick={() => setShowAddSubject(false)}
                        style={{
                          ...styles.btnCancel,
                          padding: "4px 10px",
                          fontSize: 12,
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <button
                      style={styles.addSubjectBtn}
                      onClick={() => setShowAddSubject(true)}
                    >
                      + Add Subject
                    </button>
                  )}
                </div>
              </div>

              {/* Security */}
              <div style={styles.card}>
                <div style={styles.cardTitle}>Account Security</div>
                <div style={styles.securityRow}>
                  <span style={{ fontSize: 18, color: "#718096" }}>🔒</span>
                  <div style={styles.securityText}>
                    <strong
                      style={{
                        display: "block",
                        fontSize: 13,
                        color: "#1a202c",
                        fontWeight: 500,
                      }}
                    >
                      Password
                    </strong>
                    <span style={{ fontSize: 11, color: "#718096" }}>
                      {pwdChanged}
                    </span>
                  </div>
                  <button
                    style={styles.changeBtn}
                    onClick={() => setShowPwdModal(true)}
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT PROFILE MODAL */}
      {showEditModal && (
        <div
          style={styles.overlay}
          onClick={(e) =>
            e.target === e.currentTarget && setShowEditModal(false)
          }
        >
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h3
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Edit Profile
              </h3>
              <button
                style={styles.closeBtn}
                onClick={() => setShowEditModal(false)}
              >
                ×
              </button>
            </div>

            {/* Photo section */}
            <div style={styles.modalPhotoSection}>
              <div style={styles.modalPhoto}>
                {editData.photo ? (
                  <img
                    src={editData.photo}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="preview"
                  />
                ) : (
                  editData.name[0] || "?"
                )}
              </div>
              <div>
                <p style={{ fontSize: 13, color: "#718096", marginBottom: 8 }}>
                  Update your profile photo
                </p>
                <label
                  style={styles.uploadBtn}
                  onClick={() => fileRef.current.click()}
                >
                  📷 Upload Photo
                </label>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handlePhotoUpload}
                />
              </div>
            </div>

            <div style={styles.formGrid}>
              {[
                { label: "Full Name", key: "name", type: "text", full: false },
                { label: "Generation", key: "gen", type: "text", full: false },
                {
                  label: "Email Address",
                  key: "email",
                  type: "email",
                  full: true,
                },
                {
                  label: "Role / Position",
                  key: "role",
                  type: "text",
                  full: false,
                },
              ].map(({ label, key, type, full }) => (
                <div
                  key={key}
                  style={{
                    ...styles.formField,
                    ...(full ? { gridColumn: "1 / -1" } : {}),
                  }}
                >
                  <label style={styles.formLabel}>{label}</label>
                  <input
                    type={type}
                    value={editData[key]}
                    onChange={(e) =>
                      setEditData((d) => ({ ...d, [key]: e.target.value }))
                    }
                    style={styles.formInput}
                  />
                </div>
              ))}
              <div style={styles.formField}>
                <label style={styles.formLabel}>Gender</label>
                <select
                  value={editData.gender}
                  onChange={(e) =>
                    setEditData((d) => ({ ...d, gender: e.target.value }))
                  }
                  style={styles.formInput}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={styles.formField}>
                <label style={styles.formLabel}>Date of Birth</label>
                <input
                  type="date"
                  value={editData.dob}
                  onChange={(e) =>
                    setEditData((d) => ({ ...d, dob: e.target.value }))
                  }
                  style={styles.formInput}
                />
              </div>
              <div style={{ ...styles.formField, gridColumn: "1 / -1" }}>
                <label style={styles.formLabel}>Address</label>
                <textarea
                  value={editData.address}
                  onChange={(e) =>
                    setEditData((d) => ({ ...d, address: e.target.value }))
                  }
                  style={{
                    ...styles.formInput,
                    minHeight: 80,
                    resize: "vertical",
                  }}
                />
              </div>
            </div>

            <div style={styles.modalActions}>
              <button
                style={styles.btnCancel}
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button style={styles.btnSave} onClick={saveProfile}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PASSWORD MODAL */}
      {showPwdModal && (
        <div
          style={styles.overlay}
          onClick={(e) =>
            e.target === e.currentTarget && setShowPwdModal(false)
          }
        >
          <div style={{ ...styles.modal, width: 420 }}>
            <div style={styles.modalHeader}>
              <h3
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Change Password
              </h3>
              <button
                style={styles.closeBtn}
                onClick={() => setShowPwdModal(false)}
              >
                ×
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Current Password", key: "current" },
                { label: "New Password", key: "newPwd" },
                { label: "Confirm New Password", key: "confirm" },
              ].map(({ label, key }) => (
                <div key={key} style={styles.formField}>
                  <label style={styles.formLabel}>{label}</label>
                  <input
                    type="password"
                    value={pwdData[key]}
                    onChange={(e) =>
                      setPwdData((d) => ({ ...d, [key]: e.target.value }))
                    }
                    placeholder={`Enter ${label.toLowerCase()}`}
                    style={styles.formInput}
                  />
                </div>
              ))}
            </div>
            <div style={styles.modalActions}>
              <button
                style={styles.btnCancel}
                onClick={() => setShowPwdModal(false)}
              >
                Cancel
              </button>
              <button style={styles.btnSave} onClick={savePwd}>
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      <div style={styles.toast(toast.show, toast.error)}>
        <span>{toast.error ? "❌" : "✅"}</span>
        <span>{toast.msg}</span>
      </div>
    </div>
  );
}
