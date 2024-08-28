import skills from "./Data/skills.json";
function Skill() {
  return (
    <>
      <div className="container skills" id="skill">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => {
            return (
              <>
                <div className="item" key={data.id}
                data-aos="flip-right"
                data-aos-duration="500"
                
                >
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                  <h3>{data.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skill;
