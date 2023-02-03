import React from 'react';
import {Link} from "react-router-dom";

const TermsAndConditions = () => {
    return (
        <div className="embed-responsive align-items-center">
            <h1>Terms and Conditions</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, magna id consequat aliquet, velit velit sollicitudin
                libero, eget faucibus libero libero vel nisi. Sed id arcu dapibus,
                tincidunt quam in, fringilla magna. Donec posuere ante a quam
                sollicitudin, in viverra odio laoreet. Proin ut enim quis metus
                laoreet accumsan a non sapien.
            </p>
            <p>
                Nam facilisis euismod erat a vestibulum. Nam lacinia, magna id
                bibendum congue, sem sapien fringilla dui, a faucibus elit sem id
                elit. Praesent ac ante vel nibh ullamcorper viverra eget eu urna.
                Nunc vel lectus vel urna fringilla bibendum. Aliquam erat volutpat.
                Nunc porttitor, magna eu faucibus sollicitudin, nunc leo lacinia
                nisi, vitae rutrum libero eros vitae enim.
            </p>
            <p>
                In hac habitasse platea dictumst. Sed laoreet quam id risus
                sollicitudin, a euismod est accumsan. Aliquam erat volutpat. Nullam
                vel velit vel magna fringilla varius. Sed euismod auctor ipsum, a
                pulvinar risus luctus in.
            </p>
            <Link to="/signup" >Accept</Link>
        </div>
    );
};

export default TermsAndConditions;
