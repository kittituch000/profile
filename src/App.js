import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init();
  return (
    <div>
      <div className="grid-top">
        <div></div>
        <div className="grid-top-in">
          <div>
            <img src="./image/kittituch.jpg" className="profile-image" alt="" />
          </div>
          <div className="top-text">
            กิตติธัช สุวรรณศรี
            <br />
            <br />
            <img src="./image/phone.ico" className="icon" alt="" />
            &nbsp;&nbsp;0993123330 <br />
            <img src="./image/email.ico" className="icon" alt="" />
            &nbsp;&nbsp;five835512072@gmail.com
            <br />
            <img src="./image/web.ico" className="icon" alt="" />
            &nbsp;&nbsp;www.kittituch.me
            <br />
            <img src="./image/address.ico" className="icon" alt="" />
            &nbsp;&nbsp;อ่อนนุช กรุงเทพ
          </div>
          <div className="top-text">
            ประวัติการทำงาน
            <br />
            <br />
            Thai Generation Co., Ltd
            <br />
            Magic Box Asia Co., Ltd
          </div>
        </div>
      </div>
      <div className="grid-bottom">
        <div></div>
        <div className="grid-bottom-in">
          <div
            className="grid-bottom-in-in"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="grid-bottom-in-node-image">
              <img src="./image/node.png" className="App-logo" alt="" />
            </div>
            <div className="grid-bottom-in-node-text">
              <h2>NODE JS</h2>
              <div className="nomal-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์เกี่ยวกับ NODE JS
                ร่วมกับ TYPE SCRIPT ในการสร้างระบบหลังบ้าน โดยใช้ EXPRESS <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการ์ในการใช้ Database ชนิด
                SQL และ NoSQL ดังนี้ MySQL, PostgreSQL โดยใช้ร่วมกับ Prisma
                ในการทำ ORM และ MongoDB ร่วมกับ MongGroose <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์ ในการติดต่อกับ AWS S3
                ในการเก็บ file ต่าง ๆ{" "}
              </div>
            </div>
          </div>
          <div
            className="grid-bottom-in-in"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="grid-bottom-in-node-text">
              <h2>PYTHON</h2>
              <div className="nomal-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์เกี่ยวกับ PYTHON
                ในด้าน Data Science เรื่องภาพและเสียง <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการ์ในการใช้ Database ชนิด
                NoSQL ดังนี้ MongoDB ร่วมกับ PyMongo <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์ ในการติดต่อกับ AWS S3
                ในการเก็บ file ต่าง ๆ และ AWS Rekognition ในการ train Model
                ของรูปภาพ{" "}
              </div>
            </div>
            <div className="grid-bottom-in-python-image">
              <img src="./image/python.png" className="App-logo" alt="" />
            </div>
          </div>
          <div
            className="grid-bottom-in-in"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="grid-bottom-in-unity-image">
              <img src="./image/unity.png" className="App-logo" alt="" />
            </div>
            <div className="grid-bottom-in-node-text">
              <h2>UNITY</h2>
              <div className="nomal-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์เกี่ยวกับ UNITY ในด้าน
                การจัด ฉาก ภาพ แสง <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการ์ในการใช้ 3DMAX
                ในการแก้ไข model และฉากของเกม <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์
                ในการจัดการแสงด้วยวิธีการ Bake Light ของแต่ละฉาก
                เพื่อเพิ่มประสิทธิภาพของเกม{" "}
              </div>
            </div>
          </div>
          <div
            className="grid-bottom-in-in"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="grid-bottom-in-node-text">
              <h2>TOOL</h2>
              <div className="nomal-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์เกี่ยวกับ AWS S3, AWS
                Rekognition ในการเก็บ File และการ Train Model <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการ์ในการใช้ GitHub และ
                GitLab ร่วมกับ GitLab Runner เพื่อทำ CI/CD
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์ในการใช้ Docker
                ในการสร้าง Image ของทุก Project
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีประสบการณ์ในการใช้ K8S
                เพื่อสร้าง pod โดยรับคำสั่งจาก GitLab Runner
              </div>
            </div>
            <div className="grid-bottom-in-tool-image">
              <img src="./image/git.png" className="App-logo" alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
