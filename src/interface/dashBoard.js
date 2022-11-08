import { getAuth, signOut } from "firebase/auth";


export const Dashboard = () => {
  const handleSignOut = () => {
    signOut(getAuth()).then(
      function () {
        window.location.reload();
        console.log("Signed Out");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
  };
 
  return (
   
      <div class="main-content">
        <a href="#" onClick={handleSignOut} title="signOut">
          <button
            value="Sign out"
            className="logout-btn"
            onClick={handleSignOut}
          >
            <span class="fas fa-user"></span> Log out
          </button>
        </a>

   

        <main>
          <div class="cards">
            <div class="card-single">
              <div>
                <h1>50</h1>
                <span>Customers</span>
              </div>
              <div>
                <span class="fas fa-users"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <h1>12</h1>
                <span>Projects</span>
              </div>
              <div>
                <span class="fas fa-clipboard-list"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <h1>15</h1>
                <span>Orders</span>
              </div>
              <div>
                <span class="fas fa-shopping-cart"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <h1>$20K</h1>
                <span>Total Income</span>
              </div>
              <div>
                <span class="fas fa-wallet"></span>
              </div>
            </div>
          </div>

          <div class="recent-grid">
            <div class="projects">
              <div class="card">
                <div class="card-header">
                  <h2>Recent Projects</h2>
                  <button>
                    Add new Project <span class="fas fa-plus"></span>{" "}
                  </button>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Project Title</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Website</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status purple"></span>
                            Review
                          </td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status orange"></span>
                            Pending
                          </td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status pink"></span>
                            In Progress
                          </td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status purple"></span>
                            Review
                          </td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td>Frontend</td>
                          <td>
                            <span class="status pink"></span>
                            In Progress
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="customers">
              <div class="card">
                <div class="card-header">
                  <h2>New Customers</h2>
                  <button>
                    See all <span class="fas fa-arrow-right"></span>{" "}
                  </button>
                </div>
                <div class="card-body">
                  <div class="customer">
                    <div class="info">
                      <img
                        src="https://bit.ly/3bvT89p"
                        height="40px"
                        width="40px"
                        alt="customer"
                      />
                      <div>
                        <h4>Malik Abushabab</h4>
                        <small>CEO</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="fas fa-user-circle"></span>
                      <span class="fas fa-comment"></span>
                      <span class="fas fa-phone-alt"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="https://bit.ly/3bvT89p"
                        height="40px"
                        width="40px"
                        alt="customer"
                      />
                      <div>
                        <h4>Malik Abushabab</h4>
                        <small>CEO</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="fas fa-user-circle"></span>
                      <span class="fas fa-comment"></span>
                      <span class="fas fa-phone-alt"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="https://bit.ly/3bvT89p"
                        height="40px"
                        width="40px"
                        alt="customer"
                      />
                      <div>
                        <h4>Malik Abushabab</h4>
                        <small>CEO</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="fas fa-user-circle"></span>
                      <span class="fas fa-comment"></span>
                      <span class="fas fa-phone-alt"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="https://bit.ly/3bvT89p"
                        height="40px"
                        width="40px"
                        alt="customer"
                      />
                      <div>
                        <h4>Malik Abushabab</h4>
                        <small>CEO</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="fas fa-user-circle"></span>
                      <span class="fas fa-comment"></span>
                      <span class="fas fa-phone-alt"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="https://bit.ly/3bvT89p"
                        height="40px"
                        width="40px"
                        alt="customer"
                      />
                      <div>
                        <h4>Malik Abushabab</h4>
                        <small>CEO</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="fas fa-user-circle"></span>
                      <span class="fas fa-comment"></span>
                      <span class="fas fa-phone-alt"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="https://bit.ly/3bvT89p"
                        height="40px"
                        width="40px"
                        alt="customer"
                      />
                      <div>
                        <h4>Malik Abushabab</h4>
                        <small>CEO</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="fas fa-user-circle"></span>
                      <span class="fas fa-comment"></span>
                      <span class="fas fa-phone-alt"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="https://bit.ly/3bvT89p"
                        height="40px"
                        width="40px"
                        alt="customer"
                      />
                      <div>
                        <h4>Malik Abushabab</h4>
                        <small>CEO</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="fas fa-user-circle"></span>
                      <span class="fas fa-comment"></span>
                      <span class="fas fa-phone-alt"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};
