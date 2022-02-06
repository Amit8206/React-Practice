import React, { useState } from 'react';

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    const newStyle = {
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',  // #042743      #04044c
        color: props.mode === 'dark' ? 'white' : 'gray'
    }
    const btnStyle = {
        backgroundColor: props.mode === 'dark' ? '#0d0ddf' : 'white',
        color: props.mode === 'dark' ? 'white' : 'gray'
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // let toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }





    return (
        <>
            {/* <div className="container my-5" style={newStyle}>
                <div className="container my-3">
                    <h1>About Us</h1>
                    <div className="accordion my-2" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" style={btnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    This is Amit Kumar Sahoo
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="img" style={newStyle}>
                                    <img src="About.png" alt="This is Amit Kumar sahoo" />
                                </div>
                                <div className="accordion-body" style={newStyle}>
                                    <strong>Hiii, This is  Amit Kumar Sahoo</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div> */}
            {/* </div>
                </div> */}

            {/* </div> */}


            <div className="container my-3" style={newStyle}>
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>About Us ?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center border-primary">
                        <img src="About.png" alt="Contact Us" height="400px" width="400px" />
                    </div>
                    <div className="col-md-5">
                        <div className="mb-3 my-5">
                            <p className='my-3'> <strong>Hiii, This is  Amit Kumar Sahoo</strong> It is shown by default,
                                until the collapse plugin adds the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                that just about any HTML can go within the accordion-body though the transition does limit overflow.</p>
                            <button type="submit" className="btn btn-outline-primary">Contact Us</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
