import React from 'react'

const Footer = () => {

    return (
        <>
        {/*shadow p-3 mb-5 bg-white rounded*/}
            <footer className="page-footer font-small teal pt-4 " style={{marginBottom:0,backgroundColor:'#F5F5F5'}}>
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase font-weight-bold">มหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์ </h5>
                            <p>บพิตรพิมุข จักรวรรดิ 264 ถนนจักรวรรดิ แขวงจักรวรรดิ เขตสัมพันธวงศ์ กรุงเทพฯ 10100
                            </p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase font-weight-bold">แผนกจัดการกองทุนนักศึกษา</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
                            commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
                            excepturi hic.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://www.rmutr.ac.th/"> rmutr.ac.th</a>
                </div>
            </footer>
        </>
    );
}

export default Footer