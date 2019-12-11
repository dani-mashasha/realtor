import React from "react";
import "./get_pre.scss";


class GetPre extends React.Component{
    render() {
        return(
            <div className={"getPreWrapper"}>
                <svg data-test-id="icon-checkmark" viewBox="0 0 24 24" color="green" size="3"
                     className="Icon__StyledIcon-sc-3canwz-0 iCUSrU sc-AykKC jiZwhV icon" theme="[object Object]">
                    <path
                        d="M9.4 20.4a.7.7 0 01-.5-.2l-6.7-6.9a.7.7 0 010-1 .7.7 0 011 0l6.2 6.4 11.4-13a.7.7 0 011 0 .7.7 0 010 1L10 20.1a.7.7 0 01-.5.3z"></path>
                </svg>
                <p>Be Ready to Buy... How Much Can You Borrow? </p>
                <button>Get Pre-Approved</button>
            </div>
        )
    }

}

export default GetPre;