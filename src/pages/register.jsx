import React, { useState, useEffect } from "react";
import { Message } from "element-react";
import axios from "axios";
import { config } from "../config";

export const Register = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zoom, setZoom] = useState(false);
  const [revOfJesus, setRevOfJesus] = useState(false);
  const [familyAndFriends, setFamilyAndFriends] = useState(false);
  const [other, setOther] = useState(false);
  const [otherSpecify, setOtherSpecify] = useState("");
  const [firstTime, setFirstTime] = useState(false);
  const [arrival, setArrival] = useState(false);
  const [prayerTime, setPrayerTime] = useState("");
  const [checkNumberOfTimes, setCheckNumberOfTimes] = useState([]);
  const [checkForLength, setCheckForLength] = useState(null);

  useEffect(() => {
    axios.get(config.getUser).then((data) => {
      // console.log(data.data);
      setCheckNumberOfTimes(data.data);
    });
    // check(prayerTime, arrival);
  }, [prayerTime, arrival]);

  const open4 = () => {
    Message.error(`Oops ${prayerTime} is fully booked choose different`);
  };

  const check = (option, day) => {
    if (checkNumberOfTimes.length !== 0) {
      setCheckForLength(
        checkNumberOfTimes
          .filter((a) => {
            return a.arrival === day;
          })
          .filter((b) => {
            return b.prayerTime === option;
          }).length
      );
    }
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      if (!fullName) {
        return Message.error("Please provide your full Name");
      } else if (gender === false) {
        return Message.error("Please indicate your gender");
      } else if (!phone) {
        return Message.error("please telephone number is required");
        // alert('phone is required')
      } else if (!email) {
        return Message.error("Please email is required");
      } else if (!firstTime) {
        return Message.error(
          "please specify if this is your first time attending"
        );
      } else if (!arrival) {
        return Message.error("Please provide day of arrival");
      } else if (!prayerTime) {
        return Message.error("Please provide prayer time");
      } else if (checkForLength === 5) {
        open4();
      } else {
        const dataToSend = {
          fullName,
          gender,
          phone,
          email,
          howDidYouHear: [
            { Zoom: zoom ? "Zoom" : "" },
            { Rvelation: revOfJesus ? "Revelation of Jesus" : "" },
            {
              Family_and_Friends: familyAndFriends ? "Family and Friends" : "",
            },
            { other: other ? otherSpecify : "" },
          ],
          otherSpecify: !otherSpecify ? "null" : otherSpecify,
          firstTime,
          arrival,
          prayerTime,
        };
        const response = await axios.post(config.register, dataToSend, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        });

        if (response) {
          setFullName("");
          setGender(false);
          setEmail("");
          setZoom(false);
          setRevOfJesus(false);
          setFamilyAndFriends(false);
          setOther(false);
          setOtherSpecify("");
          setFirstTime(false);
          setArrival(false);
          setPrayerTime("");
          setPhone("");
          Message({
            message:
              "Congrats, You have successfully registered for the event.",
            type: "success",
          });
        }
      }
    } catch (error) {
      Message.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const getSelectValues = (e) => {
    check(e.target.value, arrival);
    setPrayerTime(e.target.value);
  };

  const fridayPrayers = [
    {
      label: "--Please choose a time for prayer--",
      value: "No prayer for me",
    },
    {
      value: "6:00 - 7:00pm",
      label: "6:00 - 7:00pm",
    },
    {
      value: "7:00 - 8:00pm",
      label: "7:00 - 8:00pm",
    },
    {
      value: "8:00 - 9:00pm",
      label: "8:00 - 9:00pm",
    },
    {
      value: "9:00 - 10:00pm",
      label: "9:00 - 10:00pm",
    },
    {
      value: "10:00 - 11:00pm",
      label: "10:00 - 11:00pm",
    },
    {
      value: "11:00 - 12:00am",
      label: "11:00 - 12:00am",
    },
  ];

  const saturdayPrayers = [
    {
      label: "--Please choose a time for prayer--",
      value: "No prayer for me",
    },
    {
      value: "12:00 - 1:00am",
      label: "12:00 - 1:00am",
    },
    {
      value: "1:00 - 2:00am",
      label: "1:00 - 2:00am",
    },
    {
      value: "2:00 - 3:00am",
      label: "2:00 - 3:00am",
    },
    {
      value: "3:00 - 4:00am",
      label: "3:00 - 4:00am",
    },
    {
      value: "4:00 - 5:00am",
      label: "4:00 - 5:00am",
    },
    {
      value: "5:00 - 6:00am",
      label: "5:00 - 6:00am",
    },
    {
      value: "6:00 - 7:00am",
      label: "6:00 - 7:00am",
    },
    {
      value: "7:00 - 8:00am",
      label: "7:00 - 8:00am",
    },
    {
      value: "8:00 - 9:00am",
      label: "8:00 - 9:00am",
    },
    {
      value: "9:00 - 10:00am",
      label: "9:00 - 10:00am",
    },
    {
      value: "10:00 - 11:00am",
      label: "10:00 - 11:00am",
    },
    {
      value: "11:00 - 12:00pm",
      label: "11:00 - 12:00pm",
    },
    {
      value: "12:00 - 1:00pm",
      label: "12:00 - 1:00pm",
    },
    {
      value: "1:00 - 2:00pm",
      label: "1:00 - 2:00pm",
    },
    {
      value: "2:00 - 3:00pm",
      label: "2:00 - 3:00pm",
    },
    {
      value: "3:00 - 4:00pm",
      label: "3:00 - 4:00pm",
    },
    {
      value: "4:00 - 5:00pm",
      label: "4:00 - 5:00pm",
    },
    {
      value: "5:00 - 6:00pm",
      label: "5:00 - 6:00pm",
    },
  ];

  return (
    <main>
      {/* Signup */}
      <section className="g-min-height-100vh g-flex-centered g-bg-lightblue-radialgradient-circle">
        <div className="container g-py-50">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-9 col-lg-6">
              <div className="u-shadow-v24 g-bg-white rounded g-py-14 g-px-30">
                <header className="text-center mb-3">
                  <h2 className="h2 g-color-black g-font-weight-600">
                    Register for the Event
                  </h2>
                </header>
                {/* Form */}
                <form
                  className="g-py-1"
                  onSubmit={register}
                >
                  <div className="mb-4">
                    <label className="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">
                      Full Name:
                    </label>
                    <input
                      className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                      type="text"
                      placeholder="Adwoa Larsey"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      // style={!fullName? {border: "1px solid red"} : null}
                    />
                  </div>
                  <div className="g-mb-15">
                    <label className="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">
                      Gender:
                    </label>{" "}
                    <br />
                    <label className="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                        name="radInline1"
                        type="radio"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <div className="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
                        <i className="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
                      </div>
                      Male
                    </label>
                    <label className="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                        name="radInline1"
                        type="radio"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <div className="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
                        <i className="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
                      </div>
                      Female
                    </label>
                    <br />
                  </div>
                  <div className="mb-4">
                    <label className="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">
                      Phone Number(Available on Whatsapp):
                    </label>
                    <input
                      className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                      type="text"
                      placeholder="0247******"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">
                      Email:
                    </label>
                    <input
                      className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                      type="email"
                      placeholder="johndoe@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <label className="h6 g-font-weight-700 g-mb-20">
                    How did you hear of A Day With Him{" "}
                    <sup style={{ color: "red" }}>*</sup>
                  </label>
                  <div className="g-mb-20">
                    <label className="form-check-inline u-check g-pl-25">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                        type="checkbox"
                        checked={zoom}
                        onChange={(e) => setZoom(!zoom)}
                      />
                      <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                        <i className="fa fa-check"></i>
                      </div>
                      Zoom
                    </label>

                    <label className="form-check-inline u-check g-pl-25">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                        type="checkbox"
                        checked={revOfJesus}
                        onChange={(e) => setRevOfJesus(!revOfJesus)}
                      />
                      <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                        <i className="fa fa-check"></i>
                      </div>
                      The Revelation of Jesus
                    </label>

                    <label className="form-check-inline u-check g-pl-25">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                        type="checkbox"
                        checked={familyAndFriends}
                        onChange={(e) => setFamilyAndFriends(!familyAndFriends)}
                      />
                      <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                        <i className="fa fa-check"></i>
                      </div>
                      Family & friends
                    </label>

                    <label className="form-check-inline u-check g-pl-25">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                        type="checkbox"
                        checked={other}
                        onChange={(e) => setOther(!other)}
                        value="other"
                      />
                      <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0 g-transition-0_2 g-transition--ease-in">
                        <i className="fa fa-check"></i>
                      </div>
                      Other
                    </label>
                  </div>
                  {other && (
                    <div className="mb-4">
                      <label className="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">
                        Other(specify):
                      </label>
                      <input
                        className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                        type="text"
                        placeholder="Radio, TV"
                        value={otherSpecify}
                        onChange={(e) => setOtherSpecify(e.target.value)}
                      />
                    </div>
                  )}

                  <div className="row">
                    <div className="col-md-6">
                      <div className="g-mb-15">
                        <label className="h6 g-font-weight-700 g-mb-20">
                          This is my first time{" "}
                          <sup style={{ color: "red" }}>*</sup>
                        </label>{" "}
                        <br />
                        <label className="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
                          <input
                            className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                            name="radInline1_1"
                            type="radio"
                            checked={firstTime === "yes"}
                            onChange={(e) => setFirstTime(e.target.value)}
                            value="yes"
                          />
                          <div className="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
                            <i className="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
                          </div>
                          Yes
                        </label>
                        <label className="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
                          <input
                            className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                            name="radInline1_1"
                            type="radio"
                            checked={firstTime === "no"}
                            onChange={(e) => setFirstTime(e.target.value)}
                            value="no"
                          />
                          <div className="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
                            <i className="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
                          </div>
                          No
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="g-mb-3">
                        <label className="h6 g-font-weight-700 g-mb-20">
                          When will you arrive
                          <sup style={{ color: "red" }}>*</sup>
                        </label>{" "}
                        <br />
                        <label className="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
                          <input
                            className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                            name="radInline"
                            type="radio"
                            value="friday"
                            checked={arrival === "friday"}
                            onChange={(e) => setArrival(e.target.value)}
                          />
                          <div className="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
                            <i className="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
                          </div>
                          Friday
                        </label>
                        <label className="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
                          <input
                            className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                            name="radInline"
                            type="radio"
                            value="saturday"
                            checked={arrival === "saturday"}
                            onChange={(e) => setArrival(e.target.value)}
                          />
                          <div className="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
                            <i className="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
                          </div>
                          Saturday
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">
                      Prayer Time you prefer
                      <sup style={{ color: "red" }}>*</sup>
                    </label>
                    {arrival === "friday" && (
                      <select
                        value={prayerTime}
                        onChange={getSelectValues}
                        className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                      >
                        {fridayPrayers.map((el) => {
                          return (
                            <option
                              className="g-brd-secondary-light-v2 g-color-black g-color-white--active g-bg-primary--active"
                              key={el.value}
                              value={el.value}
                            >
                              {el.label}
                            </option>
                          );
                        })}
                      </select>
                    )}

                    {arrival === "saturday" && (
                      <select
                        value={prayerTime}
                        onChange={getSelectValues}
                        className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                      >
                        {saturdayPrayers.map((el) => {
                          return (
                            <option
                              className="g-brd-secondary-light-v2 g-color-black g-color-white--active g-bg-primary--active"
                              key={el.value}
                              value={el.value}
                            >
                              {el.label}
                            </option>
                          );
                        })}
                      </select>
                    )}

                    {!arrival && (
                      <div>Please choose the day of arrival to select time</div>
                    )}
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-12 align-self-center text-right">
                      <button
                        id="showToast"
                        type="submit"
                        className="btn btn-primary btn-lg btn-block g-mr-10 g-mb-15"
                        // style={{"cursor": "not-allowed"}}
                        disabled = {!fullName && !email && !phone && !prayerTime}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Signup */}
    </main>
  );
};
