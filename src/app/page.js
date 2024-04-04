import Image from "next/image";
import './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Home() {
  return (
    <div className="row">
      <div className="col-md-6">

        <div className="Appop d-flex justify-content-center " >
          <div className>
            <div className="border rounded">
              <div>
                <Image
                  src="/img/WhatsApp Image 2024-04-02 at 14.12.10_400b0c5c.jpg"
                  width={500}
                  height={500}
                  alt="Pappp"
                />
              </div>
            </div>
            <div>
              <br></br>

              <a href={`whatsapp://send?text=http://localhost:3000/&phone=+201018020470`} className="d-flex justify-content-center ">
                <button className="btn btn-success">
                  طلب الباقه
                </button>

              </a>

            </div>
            <br></br>
          </div>
        </div>
      </div>
      <div className="col-md-6">

        <div className="Appop d-flex justify-content-center " >
          <div className>
            <div className="border rounded">
              <div>
                <Image
                  src="/bird.jpg"
                  width={500}
                  height={500}
                  alt="Pappp"
                />
              </div>
            </div>
            <div>
              <br></br>

              <a href={`whatsapp://send?text=http://localhost:3000/&phone=+201018020470`} className="d-flex justify-content-center ">
                <button className="btn btn-success">
                  طلب الباقه
                </button>

              </a>

            </div>
            <br></br>
          </div>
        </div>
      </div>
      <div className="col-md-6">

        <div className="Appop d-flex justify-content-center " >
          <div className>
            <div className="border rounded">
              <div>
                <Image
                  src="/img/3.jpg"
                  width={500}
                  height={500}
                  alt="Pappp"
                />
              </div>
            </div>
            <div>
              <br></br>

              <a href={`whatsapp://send?text=http://localhost:3000/&phone=+201018020470`} className="d-flex justify-content-center ">
                <button className="btn btn-success">
                  طلب الباقه
                </button>

              </a>

            </div>
            <br></br>
          </div>
        </div>
      </div>
      <div className="col-md-6">

        <div className="Appop d-flex justify-content-center " >
          <div className>
            <div className="border rounded">
              <div>
                <Image
                  src="/img/4.jpg"
                  width={500}
                  height={500}
                  alt="Pappp"
                />
              </div>
            </div>
            <div>
              <br></br>

              <a href={`whatsapp://send?text=http://localhost:3000/&phone=+201018020470`} className="d-flex justify-content-center ">
                <button className="btn btn-success">
                  طلب الباقه
                </button>

              </a>

            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
