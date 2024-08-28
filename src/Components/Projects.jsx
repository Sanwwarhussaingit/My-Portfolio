// import { redirect } from "react-router";
import project from "./Data/projects.json";
function Projects() {
  return (
    <>
      <div className="container projects my-3" id="project">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-3 col-md-4 col-lg-3 col-sm-6 mx-3 project-card"
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    borderRadius: "10px",
                    border: "1px solid rgb(13, 55, 139)",
                    boxShadow: "0 0 5px 0  rgb(13, 55, 139)",
                    // padding: "100px",
                    marginInline: "auto",
                    
                   
                    
                 
                    
                  }}
                >
                  <div
                    className="
                  img  
                  d-flex justify-content-center align-item-center
                  p-3"
                  >
                    <img
                      src={`${data.imageSrc}`}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: " 1px solid rgb(13, 55, 139)",
                        borderRadius: "15px",
                        
                        
                      }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning mx-3">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
