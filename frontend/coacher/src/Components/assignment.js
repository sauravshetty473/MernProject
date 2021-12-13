import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./navbar";
import "../style/styles.css";
import "../style/assignment.css";

class Assignment extends React.Component {
    render() {
        return (
            <div>
            {/* <form className="ass-form" action="" method="post" encType="multipart/form-data" autoComplete="on" noValidate="true">
                <div className="form-all">
                    <ul className="form-section">
                        <li className="form-input-wide" datatype="control_head">
                            <div className="form-header-group">
                                <div className="header-text">
                                    <h1 className="form-header" id="header1">Assignment Submission</h1>
                                </div>
                            </div>
                        </li>
                        <li className="form-line">
                            <label className="form-label form-label-top">
                                Student Name
                            </label>
                            <div className="form-input-wide">
                                <div className="data-wrapper-react">
                                    <span className="form-sub-label-container">
                                        <input type="text" className="form-textbox" placeholder="John"></input>
                                        <label className="form-sub-label" style={{ minHeight: "13px" }}>First Name</label>
                                    </span>
                                    <span className="form-sub-label-container">
                                        <input type="text" className="form-textbox" placeholder="Doe"></input>
                                        <label className="form-sub-label" style={{ minHeight: "13px" }}>Last Name</label>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="form-line form-line-column form-col-2" data-type="control_email" id="id_4">
                            <label className="form-label form-label-top" id="label_4" for="input_4"> E-mail </label>
                            <div id="cid_4" className="form-input-wide" data-layout="half">
                                <span className="form-sub-label-container" style={{ verticalAlign: "top" }}>
                                    <input type="email" id="input_4" name="q4_email4" className="form-textbox validate[Email]" data-defaultvalue="" style={{width:"310px"}} size="310" value="" placeholder="ex: myname@example.com" data-component="email" aria-labelledby="label_4 sublabel_input_4" />
                                    <label className="form-sub-label" for="input_4" id="sublabel_input_4" style={{minHeight: "13px"}} aria-hidden="false"> So that we can get back to you </label>
                                </span>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_textarea" id="id_11">
                            <label class="form-label form-label-top form-label-auto" id="label_11" for="input_11"> Q1. </label>
                            <div id="cid_11" class="form-input-wide" data-layout="full">
                                <textarea id="input_11" class="form-textarea custom-hint-group form-custom-hint" name="q11_q1" style={{width:"648px",height:"163px"}} data-component="textarea" aria-labelledby="label_11" data-customhint="Type here..." customhinted="true" placeholder="Type here..." spellcheck="false"></textarea>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_textarea" id="id_11">
                            <label class="form-label form-label-top form-label-auto" id="label_11" for="input_11"> Q2. </label>
                            <div id="cid_11" class="form-input-wide" data-layout="full">
                                <textarea id="input_11" class="form-textarea custom-hint-group form-custom-hint" name="q11_q1" style={{width:"648px", height:"163px"}} data-component="textarea" aria-labelledby="label_11" data-customhint="Type here..." customhinted="true" placeholder="Type here..." spellcheck="false"></textarea>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_textarea" id="id_11">
                            <label class="form-label form-label-top form-label-auto" id="label_11" for="input_11"> Q3. </label>
                            <div id="cid_11" class="form-input-wide" data-layout="full">
                                <textarea id="input_11" class="form-textarea custom-hint-group form-custom-hint" name="q11_q1" style={{width:"648px", height:"163px"}} data-component="textarea" aria-labelledby="label_11" data-customhint="Type here..." customhinted="true" placeholder="Type here..." spellcheck="false"></textarea>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_textarea" id="id_11">
                            <label class="form-label form-label-top form-label-auto" id="label_11" for="input_11"> Q4. </label>
                            <div id="cid_11" class="form-input-wide" data-layout="full">
                                <textarea id="input_11" class="form-textarea custom-hint-group form-custom-hint" name="q11_q1" style={{width:"648px", height:"163px"}} data-component="textarea" aria-labelledby="label_11" data-customhint="Type here..." customhinted="true" placeholder="Type here..." spellcheck="false"></textarea>
                            </div>
                        </li>
                        <li class="form-line" data-type="control_button" id="id_2">
                            <div id="cid_2" class="form-input-wide" data-layout="full">
                                <div data-align="center" class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField">
                                    <button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">
                                    Submit
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form> */}
            </div>
        );
    }
}

export default Assignment;