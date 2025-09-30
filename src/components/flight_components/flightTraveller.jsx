import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { nationalities, getNationalityCodeByName } from "../../utils/constant";
import { useCallback } from "react";

export default function FlightTraveller({
  FlightRequest,
  validatePrices,
  isLoading,
  hideButtom,
}) {
  const [travellerDetails, setTravellerDetails] = useState([]);
  const [openCalendars, setOpenCalendars] = useState({});
  const [filterNationalities, setFilterNationalities] = useState([]);
  const [selectNationality, setSelectNationality] = useState({});
  const startDateRef = useRef(null);

  const today = new Date();
  const DobStartDate = new Date(today);
  DobStartDate.setDate(today.getDate() - 730);
  const DobIStartDate = new Date(today);
  DobIStartDate.setDate(today.getDate() - 2);
console.log("hideButtom",hideButtom);
  const styles = {
    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 12,
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 12,
    },
    label: {
      fontSize: 12,
      color: "#555",
      marginBottom: 6,
      display: "block",
    },
    calendarWrapper: {
      position: "relative",
    },
    calendarPopup: {
      position: "absolute",
      zIndex: 20,
      background: "#fff",
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      borderRadius: 8,
      padding: 8,
      marginTop: 6,
    },
  };
  const calculateAge = (dob) => {
    if (!dob) return null;

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
  const isLeadAdult = (paxIndex) => paxIndex === 0;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startDateRef.current &&
        !startDateRef.current.contains(event.target)
      ) {
        setOpenCalendars({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleTravellerChange = (paxType, paxIndex, field, value) => {
    const roomId = 1;
    const paxId = paxIndex + 1;

    setTravellerDetails((prev) => {
      const existingIndex = prev.findIndex(
        (t) => t.RoomID === roomId && t.PaxType === paxType && t.PaxId === paxId
      );

      const base = prev[existingIndex] || {
        RoomID: roomId,
        PaxType: paxType,
        PaxId: paxId,
        LeadPax: paxType === "A" && paxIndex === 0,
        Title: "",
        Forename: "",
        Surname: "",
        PaxMobile: "",
        PaxMobilePrefix: "",
        PaxEmail: "",
        DOB: "",
        Age: null,
        PaxDocuments: {
          Passport: {
            Nationality: "",
            NationalityCode: "",
            PassportNumber: null,
            IssuingCountry: null,
            IssuingCountryCode: null,
            DateOfIssue: null,
            DateOfExpiry: null,
            PassportUpload: null,
            IssuingCity: null,
            IssuingCityCode: null,
          },
        },
      };

      let updatedTraveller = { ...base };

      // ✅ If updating passport fields
      if (field.startsWith("Passport.")) {
        const passportField = field.split(".")[1]; // e.g., "Nationality"
        updatedTraveller = {
          ...base,
          PaxDocuments: {
            ...base.PaxDocuments,
            Passport: {
              ...base.PaxDocuments.Passport,
              [passportField]: value,
            },
          },
        };
      }
      // ✅ If updating top-level fields
      else {
        updatedTraveller = {
          ...base,
          [field]: value,
          ...(field === "DOB" ? { Age: calculateAge(value) } : {}),
        };
      }

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = updatedTraveller;
        return updated;
      } else {
        return [...prev, updatedTraveller];
      }
    });
  };

  const handleTravellerNationalitiesChange = useCallback(
    (paxType, paxIndex, field, value) => {
      const key = `${paxType}${paxIndex}`; // ✅ consistent key (no dash)

      // update selected nationality
      setSelectNationality((prev) => ({
        ...prev,
        [key]: value,
      }));

      // filter suggestions
      const filtered = nationalities.filter((x) =>
        x.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilterNationalities((prev) => ({
        ...prev,
        [key]: filtered,
      }));

      console.log("filtered suggestions: ", filtered);
    },
    [] // ✅ only depends on the source list
  );

  const selectNationalities = (paxType, paxIndex, field, value) => {
    const roomId = 1;
    const paxId = paxIndex + 1;
    const key = `${paxType}${paxIndex}`;
    setFilterNationalities((prev) => ({
      ...prev,
      [key]: [],
    }));
    setTravellerDetails((prev) => {
      const existingIndex = prev.findIndex(
        (t) => t.RoomID === roomId && t.PaxType === paxType && t.PaxId === paxId
      );

      const base = prev[existingIndex] || {
        RoomID: roomId,
        PaxType: paxType,
        PaxId: paxId,
        LeadPax: paxType === "A" && paxIndex === 0,
        Title: "",
        Forename: "",
        Surname: "",
        PaxMobile: "",
        PaxMobilePrefix: "",
        PaxEmail: "",
        DOB: "",
        Age: null,
        PaxDocuments: {
          Passport: {
            Nationality: "",
            NationalityCode: "",
            PassportNumber: null,
            IssuingCountry: null,
            IssuingCountryCode: null,
            DateOfIssue: null,
            DateOfExpiry: null,
            PassportUpload: null,
            IssuingCity: null,
            IssuingCityCode: null,
          },
        },
      };

      let updatedTraveller = { ...base };

      // ✅ If updating passport fields
      if (field.startsWith("Passport.")) {
        const passportField = field.split(".")[1]; // e.g., "Nationality"
        updatedTraveller = {
          ...base,
          PaxDocuments: {
            ...base.PaxDocuments,
            Passport: {
              ...base.PaxDocuments.Passport,
              [passportField]: value,
              NationalityCode: getNationalityCodeByName(value),
            },
          },
        };
      }
      // ✅ If updating top-level fields
      else {
        updatedTraveller = {
          ...base,
          [field]: value,
          ...(field === "DOB" ? { Age: calculateAge(value) } : {}),
        };
      }

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = updatedTraveller;
        return updated;
      } else {
        return [...prev, updatedTraveller];
      }
    });
  };

  const getTravellerValue = (roomIndex, paxType, paxIndex, field) => {
    const roomId = 1;
    const paxId = paxIndex + 1;

    const traveller = travellerDetails.find(
      (t) => t.RoomID === roomId && t.PaxType === paxType && t.PaxId === paxId
    );

    if (!traveller) return "";

    // ✅ Check if field is nested (e.g., "Passport.Nationality")
    if (field.startsWith("Passport.")) {
      const passportField = field.split(".")[1]; // "Nationality"
      return traveller.PaxDocuments?.Passport?.[passportField] || "";
    }

    // ✅ Otherwise, return top-level field
    return traveller[field] || "";
  };

  useEffect(() => {
    localStorage.setItem("flightTravelers", JSON.stringify(travellerDetails));
  }, [travellerDetails]);

  const isFormComplete = (() => {
    // if (!roomData || roomData.length === 0) return false;
    // for (let roomIndex = 0; roomIndex < roomData.length; roomIndex++) {
    //   const room = roomData[roomIndex];

    for (let paxIndex = 0; paxIndex < (Number(FlightRequest.Adults) || 0); paxIndex++) {
      const firstName = (
        getTravellerValue(paxIndex,"A", paxIndex, "Forename") || ""
      ).trim();
      const lastName = (
        getTravellerValue(paxIndex,"A", paxIndex, "Surname") || ""
      ).trim();
      if (!firstName || !lastName) return false;

      if (isLeadAdult(paxIndex)) {
        const email = (
          getTravellerValue(paxIndex,"A", paxIndex, "PaxEmail") || ""
        ).trim();
        const mobile = (
          getTravellerValue(paxIndex,"A", paxIndex, "PaxMobile") || ""
        ).trim();
        if (!isValidEmail(email)) return false;
        if (!/^\d{10}$/.test(mobile)) return false;
      }
    }

    for (
      let paxIndex = 0;
      paxIndex < (Number(FlightRequest.Children) || 0);
      paxIndex++
    ) {
      const firstName = (
        getTravellerValue(paxIndex,"C", paxIndex, "Forename") || ""
      ).trim();
      const lastName = (
        getTravellerValue(paxIndex,"C", paxIndex, "Surname") || ""
      ).trim();
      const dob = (getTravellerValue(paxIndex,"C", paxIndex, "DOB") || "").trim();
      if (!firstName || !lastName || !dob) return false;
    }

    for (
      let paxIndex = 0;
      paxIndex < (Number(FlightRequest.Infants) || 0);
      paxIndex++
    ) {
      const firstName = (
        getTravellerValue(paxIndex,"I", paxIndex, "Forename") || ""
      ).trim();
      const lastName = (
        getTravellerValue(paxIndex,"I", paxIndex, "Surname") || ""
      ).trim();
      const dob = (getTravellerValue(paxIndex,"I", paxIndex, "DOB") || "").trim();
      if (!firstName || !lastName || !dob) return false;
    }
    // }
    return true;
  })();
  console.log("isFormComplete", isFormComplete);
  return (
    <form
      ref={startDateRef}
      onSubmit={(e) => {
        e.preventDefault();
        if (isFormComplete) {
          validatePrices(travellerDetails);
        }
      }}
    >
      <div className="form-group mt-3">
        <div className="mb-4 border rounded p-3 position-relative">
          {/* Adults */}
          {[...Array(FlightRequest.Adults)].map((_, i) => (
            <div
              key={`adult-${i}`}
              style={{
                marginTop: i > 0 ? 16 : 8,
                paddingTop: i > 0 ? 12 : 0,
                borderTop: i > 0 ? "1px solid #eee" : "none",
                marginBottom: 8,
              }}
            >
              <h6>Adult {i + 1}</h6>
              <div style={styles.grid4}>
                <div>
                  <label style={styles.label}>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={getTravellerValue(i, "A", i, "Forename")}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        handleTravellerChange(
                          "A",
                          i,
                          "Forename",
                          e.target.value
                        );
                      }
                    }}
                    required={i === 0} // First adult is required
                  />
                </div>
                <div>
                  <label style={styles.label}>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Surname"
                    value={getTravellerValue(i, "A", i, "Surname")}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        handleTravellerChange(
                          "A",
                          i,
                          "Surname",
                          e.target.value
                        );
                      }
                    }}
                    required={i === 0}
                  />
                </div>
                <div>
                  <label style={styles.label}>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={getTravellerValue(i, "A", i, "PaxEmail")}
                    onChange={(e) =>
                      handleTravellerChange("A", i, "PaxEmail", e.target.value)
                    }
                    required={i === 0}
                  />
                </div>
                <div>
                  <label style={styles.label}>Mobile</label>
                  <input
                    className="form-control"
                    type="text"
                    maxLength="10"
                    placeholder="Mobile"
                    value={getTravellerValue(i, "A", i, "PaxMobile")}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d{0,10}$/.test(value)) {
                        handleTravellerChange("A", i, "PaxMobile", value);
                      }
                    }}
                    required={i === 0}
                  />
                </div>
                <div style={{ position: "relative" }}>
                  <label style={styles.label}>Nationality</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nationality"
                    value={
                      getTravellerValue(i, "A", i, "Passport.Nationality") ||
                      selectNationality["A" + i]
                    }
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        handleTravellerNationalitiesChange(
                          "A",
                          i,
                          "Passport.Nationality",
                          e.target.value
                        );
                      }
                    }}
                    required={i === 0}
                  />
                  {filterNationalities &&
                    filterNationalities["A" + i] &&
                    filterNationalities["A" + i].length > 0 && (
                      <div
                        style={{
                          position: "absolute",
                          background: "#fff",
                          border: "1px solid #ccc",
                          width: "100%",
                          zIndex: 1000,
                          maxHeight: "150px",
                          overflowY: "auto",
                        }}
                      >
                        {filterNationalities["A" + i].map((_nat, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: "8px",
                              cursor: "pointer",
                              borderBottom: "1px solid #eee",
                            }}
                            onClick={() =>
                              selectNationalities(
                                "A",
                                i,
                                "Passport.Nationality",
                                _nat.name
                              )
                            }
                          >
                            {_nat.name}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
                <div>
                  <label style={styles.label}>Passport Number</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Passport Number"
                    value={getTravellerValue(
                      i,
                      "A",
                      i,
                      "Passport.PassportNumber"
                    )}
                    onChange={(e) =>
                      handleTravellerChange(
                        "A",
                        i,
                        "Passport.PassportNumber",
                        e.target.value
                      )
                    }
                    required={i === 0}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Children */}
          {FlightRequest.Children > 0 &&
            [...Array(FlightRequest.Children)].map((_, i) => (
              <div
                key={`child-${i}`}
                style={{
                  marginTop: i > 0 ? 16 : 8,
                  paddingTop: i > 0 ? 12 : 0,
                  borderTop: i > 0 ? "1px solid #eee" : "none",
                  marginBottom: 8,
                }}
              >
                <h6>Child {i + 1}</h6>
                <div style={styles.grid3}>
                  <div>
                    <label style={styles.label}>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      value={getTravellerValue(i, "C", i, "Forename")}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z ]*$/.test(value)) {
                          handleTravellerChange(
                            "C",
                            i,
                            "Forename",
                            e.target.value
                          );
                        }
                      }}
                    />
                  </div>
                  <div>
                    <label style={styles.label}>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Surname"
                      value={getTravellerValue(i, "C", i, "Surname")}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z ]*$/.test(value)) {
                          handleTravellerChange(
                            "C",
                            i,
                            "Surname",
                            e.target.value
                          );
                        }
                      }}
                    />
                  </div>
                  <div style={styles.calendarWrapper}>
                    <label style={styles.label}>Date of birth</label>

                    <input
                      type="text"
                      readOnly
                      className="form-control fw-bold custom-input"
                      value={getTravellerValue(i, "C", i, "DOB")}
                      onClick={() => {
                        const key = `${i}-C-${i}`;
                        setOpenCalendars((prev) => ({
                          ...prev,
                          [key]: !prev[key],
                        }));
                      }}
                      placeholder="Date of Birth"
                    />
                    {openCalendars[`${i}-C-${i}`] && (
                      <div style={styles.calendarPopup}>
                        <Calendar
                          onChange={(date) => {
                            const formattedDate = date
                              .toISOString()
                              .split("T")[0]; // 'YYYY-MM-DD'
                            handleTravellerChange("C", i, "DOB", formattedDate);
                            setOpenCalendars((prev) => ({
                              ...prev,
                              [`${i}-C-${i}`]: false,
                            }));
                          }}
                          value={(() => {
                            const dobStr = getTravellerValue(i, "C", i, "DOB");
                            const parsedDate = new Date(dobStr);
                            return isNaN(parsedDate.getTime())
                              ? DobStartDate
                              : parsedDate.toLocaleDateString("en-GB");
                          })()}
                          maxDate={(() => {
                            const today = new Date();
                            const maxDate = new Date(today);
                            maxDate.setDate(today.getDate() - 730); // 2 years ago
                            return maxDate;
                          })()}
                          minDate={(() => {
                            const today = new Date();
                            const minDate = new Date(today);
                            minDate.setDate(today.getDate() - 365 * 12); // 12 years ago
                            return minDate;
                          })()}
                          selectRange={false}
                          showNeighboringMonth={true}
                          showFixedNumberOfWeeks={false}
                          minDetail="month"
                        />
                      </div>
                    )}
                  </div>
                  <div style={{ position: "relative" }}>
                    <label style={styles.label}>Nationality</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nationality"
                      value={
                        getTravellerValue(i, "C", i, "Passport.Nationality") ||
                        selectNationality["C" + i]
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z ]*$/.test(value)) {
                          handleTravellerNationalitiesChange(
                            "C",
                            i,
                            "Passport.Nationality",
                            e.target.value
                          );
                        }
                      }}
                    />
                    {filterNationalities &&
                      filterNationalities["C" + i] &&
                      filterNationalities["C" + i].length > 0 && (
                        <div
                          style={{
                            position: "absolute",
                            background: "#fff",
                            border: "1px solid #ccc",
                            width: "100%",
                            zIndex: 1000,
                            maxHeight: "150px",
                            overflowY: "auto",
                          }}
                        >
                          {filterNationalities["C" + i].map((_nat, idx) => (
                            <div
                              key={idx}
                              style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                              }}
                              onClick={() =>
                                selectNationalities(
                                  "C",
                                  i,
                                  "Passport.Nationality",
                                  _nat.name
                                )
                              }
                            >
                              {_nat.name}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                  <div>
                    <label style={styles.label}>Passport Number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Passport Number"
                      value={getTravellerValue(
                        i,
                        "C",
                        i,
                        "Passport.PassportNumber"
                      )}
                      onChange={(e) =>
                        handleTravellerChange(
                          "C",
                          i,
                          "Passport.PassportNumber",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}

          {/* Infants */}
          {FlightRequest.Infants > 0 &&
            [...Array(FlightRequest.Infants)].map((_, i) => (
              <div
                key={`Infants-${i}`}
                style={{
                  marginTop: i > 0 ? 16 : 8,
                  paddingTop: i > 0 ? 12 : 0,
                  borderTop: i > 0 ? "1px solid #eee" : "none",
                  marginBottom: 8,
                }}
              >
                <h6>Infant {i + 1}</h6>
                <div style={styles.grid3}>
                  <div>
                    <label style={styles.label}>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      value={getTravellerValue(i, "I", i, "Forename")}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z ]*$/.test(value)) {
                          handleTravellerChange(
                            "I",
                            i,
                            "Forename",
                            e.target.value
                          );
                        }
                      }}
                    />
                  </div>
                  <div>
                    <label style={styles.label}>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Surname"
                      value={getTravellerValue(i, "I", i, "Surname")}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z ]*$/.test(value)) {
                          handleTravellerChange(
                            "I",
                            i,
                            "Surname",
                            e.target.value
                          );
                        }
                      }}
                    />
                  </div>
                  <div style={styles.calendarWrapper}>
                    <label style={styles.label}>Date of birth</label>

                    <input
                      type="text"
                      readOnly
                      className="form-control fw-bold custom-input"
                      value={getTravellerValue(i, "I", i, "DOB")}
                      onClick={() => {
                        const key = `${i}-I-${i}`;
                        setOpenCalendars((prev) => ({
                          ...prev,
                          [key]: !prev[key],
                        }));
                      }}
                      placeholder="Date of Birth"
                    />
                    {openCalendars[`${i}-I-${i}`] && (
                      <div style={styles.calendarPopup}>
                        <Calendar
                          onChange={(date) => {
                            const formattedDate = date
                              .toISOString()
                              .split("T")[0]; // 'YYYY-MM-DD'
                            handleTravellerChange("I", i, "DOB", formattedDate);
                            setOpenCalendars((prev) => ({
                              ...prev,
                              [`${i}-I-${i}`]: false,
                            }));
                          }}
                          value={(() => {
                            const dobStr = getTravellerValue(i, "I", i, "DOB");
                            const parsedDate = new Date(dobStr);
                            return isNaN(parsedDate.getTime())
                              ? DobIStartDate
                              : parsedDate.toLocaleDateString("en-GB");
                          })()}
                          maxDate={(() => {
                            const today = new Date();
                            const maxDate = new Date(today);
                            maxDate.setDate(today.getDate() - 2); // 2 days ago
                            return maxDate;
                          })()}
                          minDate={(() => {
                            const today = new Date();
                            const minDate = new Date(today);
                            minDate.setDate(today.getDate() - 365 * 2); // 2 years ago
                            return minDate;
                          })()}
                          selectRange={false}
                          showNeighboringMonth={true}
                          showFixedNumberOfWeeks={false}
                          minDetail="month"
                        />
                      </div>
                    )}
                  </div>
                  <div style={{ position: "relative" }}>
                    <label style={styles.label}>Nationality</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nationality"
                      value={
                        getTravellerValue(i, "I", i, "Passport.Nationality") ||
                        selectNationality["I" + i]
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z ]*$/.test(value)) {
                          handleTravellerNationalitiesChange(
                            "I",
                            i,
                            "Passport.Nationality",
                            e.target.value
                          );
                        }
                      }}
                    />
                    {filterNationalities &&
                      filterNationalities["I" + i] &&
                      filterNationalities["I" + i].length > 0 && (
                        <div
                          style={{
                            position: "absolute",
                            background: "#fff",
                            border: "1px solid #ccc",
                            width: "100%",
                            zIndex: 1000,
                            maxHeight: "150px",
                            overflowY: "auto",
                          }}
                        >
                          {filterNationalities["I" + i].map((_nat, idx) => (
                            <div
                              key={idx}
                              style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                              }}
                              onClick={() =>
                                selectNationalities(
                                  "I",
                                  i,
                                  "Passport.Nationality",
                                  _nat.name
                                )
                              }
                            >
                              {_nat.name}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                  <div>
                    <label style={styles.label}>Passport Number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Passport Number"
                      value={getTravellerValue(
                        i,
                        "I",
                        i,
                        "Passport.PassportNumber"
                      )}
                      onChange={(e) =>
                        handleTravellerChange(
                          "I",
                          i,
                          "Passport.PassportNumber",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {!hideButtom && isFormComplete && (
        <button
          style={{
            background: "#0077ff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "12px 0",
            width: "150px",
            fontWeight: 700,
            fontSize: 17,
            cursor: "pointer",
            float: "right",
          }}
          type="submit"
          className={`trvl-submit-btn ${isLoading ? "disabled" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? <div className="spinner">Loading </div> : "Get Price"}
        </button>
      )}
    </form>
  );
}
