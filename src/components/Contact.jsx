import React from 'react';

export default function Contact(props) {

    const newStyle = {
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',    //               #04044c
        color: props.mode === 'dark' ? 'white' : 'gray'
    }


    return (
        <>
            <div className="container my-3" style={newStyle}>
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="contact.png" alt="Contact Us" height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
