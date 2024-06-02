import React from "react";
import Head from "../../../Common/Head/Head";
import Navbar from "../../../Common/Navbar/Navbar";

const Changepassword = () => {
  return (
    <>
      <Head />
      <Navbar />
      <main style={{ backgroundColor: "#0073e6" }}>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            
                  <div
                    className="card mb-3"
                    style={{ width: "360px", height: "430px" }}
                  >
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h3 className="card-title text-center pb-0 fs-4">
                          Change password Your Account
                        </h3>
                        {/* <p className="text-center small">
                          Enter your email &amp; password to login
                        </p> */}
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="newpassword" className="form-label">
                            New Password
                          </label>
                          <div className="input-group has-validation">
                            {/* <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span> */}
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="New Password"
                            //   value={email}
                            //   onChange={(e) => setEmail(e.target.value)}
                            />
                       
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                          />
                          {/* <div className="invalid-feedback">
                            Please enter your password!
                          </div> */}
                        </div>
                        <div className="col-12">
                 
                        </div>
                        <div className="col-12">
                          <button
                            style={{ marginTop: "36px" }}
                            className="btn btn-success w-100"
                            type="submit"
                            // onClick={submitLogin}
                          >
                            Submit
                          </button>
                        </div>
                        <div className="col-12">
                          {/* <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Changepassword;
