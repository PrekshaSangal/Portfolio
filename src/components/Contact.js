
export default function Contact() {
  

  return (
    <>
        <div className="row resume m-3" style={{backgroundColor:'var(--color-1)',borderRadius:'5px'}}>
            <div className="col-12 text-center">
            <h1 className='my-4' style={{color:'var(--color-6)',fontWeight:'900',fontSize:'55px'}}>Contact</h1>
            </div>
            <div className="d-flex cont justify-content-evenly mb-5">
              <div className="card p-3 m-3 col-md-5 d-flex align-items-center justify-content-center" style={{backgroundColor:'var(--color-2)',border:'none'}}>
                <div className="card-body mobile w-50">
                <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>Mobile no. : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <img className='m-0' src="https://img.shields.io/badge/7078068869-%230077B5.svg?style=for-the-badge" alt="" />
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>Email : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="mailto:prekshasangal@gmail.com">
                    <img className='m-0' src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>LinkedIn : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="https://www.linkedin.com/in/preksha-sangal-898336275/">
                    <img className='m-0' src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>WhatsApp : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="https://wa.me/+917078068869">
                    <img className='m-0' src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                    <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                      <b>GitHub : </b>
                      </div>
                    <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                      <a href="https://github.com/PrekshaSangal">
                      <img className='m-0' src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />
                      </a>
                      </div>
                  </div>
                </div>
              </div>
              

              </div>
        </div>
    </>
  )
}
