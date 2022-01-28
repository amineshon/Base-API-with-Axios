import React from "react";
import { useApi } from "../../provider/PrivateRoute";

function AccountOverview({ coinName }) {
  const {NameFun } =
    useApi();


  
  const NameFunction = async (data) => {
    const NameFunctionRequest = await NameFunctionAxios({
      otp: otpIrtWithdraw,
      track_id: irtResultToken,
    });
    
  };

  return (
    <>
      {/* {state && <div dangerouslySetInnerHTML={{ __html: state }}></div>} */}
      <Header2 />
      <Sidebar />

      <div>

                <button onClick={NameFunction}>
                aminmohammadi.me
                </button>
          
      </div>

      {/* <Footer2 /> */}
    </>
  );
}

export default AccountOverview;
