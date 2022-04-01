import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <div className="">
                <footer style={{ backgroundColor: '#F0E68C' }}>
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4">
                                <h5 className="mb-3" style={{ letterSpacing: 2, color: '#20B2AA' }}>GIỚI THIỆU</h5>
                                <p>
                                Ra đời vào ngày 14/8/2004 và hiện tại là nơi cung cấp hơn <br /> 200 nhãn hiệu nước hoa cao cấp trên thế giới. Là website <br /> nước hoa đầu tiên tại Việt Nam. Định hướng của chúng tôi <br />là trở thành nhà cung cấp nước hoa số 1 tại VN, mang lại sự lựa <br /> chọn đa dạng, sự thuận tiện, tiết kiệm tiền & thời gian, <br />đồng thời mang đến sự yên tâm & hài lòng đến với khách hàng.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <h5 className="mb-3" style={{ letterSpacing: 2, color: '#20B2AA' }}>HƯỚNG DẪN</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1">
                                        <a href="" style={{ color: '#4f4f4f' }}>Chính sách giao hàng</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="" style={{ color: '#4f4f4f' }}>Chính sách đổi trả hàng</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="" style={{ color: '#4f4f4f' }}>Hướng dẫn thanh toán</a>
                                    </li>
                                    <li>
                                        <a href="" style={{ color: '#4f4f4f' }}>Hướng dẫn mua hàng</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 mb-4">
                                <h5 className="mb-1" style={{ letterSpacing: 2, color: '#20B2AA' }}>Opening hours</h5>
                                <table className="table" style={{ color: '#4f4f4f', borderColor: '#666' }}>
                                    <tbody>
                                        <tr>
                                            <td>Mon - Fri:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Sat - Sun:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2022 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/">Design by Calisto</a>
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
            {/*End of.container-- >
    )
}
*/}</div>
    )
}


export default Footer