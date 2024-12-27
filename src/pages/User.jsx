import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMsg } from "../redux/chatSlice";
import { useSelector } from "react-redux";

const User = () => {
 let  allMsg = useSelector(state => state.chatSlice)
  let dispactch = useDispatch();

  let [txt, setTxt] = useState("");
  let send = () => {
    let obj = {
      sender: 2,
      msg: txt,
      rec: 1
    }
    dispactch(sendMsg(obj))
    setTxt("")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card m-3">
            {/* Card Header */}
            <div className="card-header" style={{ backgroundColor: "#075e54" }}>
              <h4 className="text-light">Chat Box: Boss</h4>
            </div>

            {/* Card Body */}
            <div
              className="card-body"
              style={{
                height: "350px",
                overflowY: "auto",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  width: "100%",
                }}
              >
                {
                  allMsg.map((item, index) => {
                    return (
                      <li
                        style={{
                          textAlign: item.sender == 2 ? "right" : "left", // Default example alignment
                          margin: "5px",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: item.sender == 2 ? "green" : "red", // Example background color
                            padding: "5px",
                            borderRadius: "5px",
                          
                          }}
                        >
                          {item.msg}
                        </span>
                      </li>
                    )
                  })
                }


              </ul>
            </div>

            {/* Card Footer */}
            <div className="card-footer">
              <div className="input-group mb-3">
                <input
                  value={txt}
                  onChange={(e) => setTxt(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  aria-label="Message"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  style={{ backgroundColor: "#075e54", color: "white" }}
                  onClick={send}
                  type="button"
                  id="button-addon2"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
