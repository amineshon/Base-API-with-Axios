import React from "react";
import { axiosGet, axiosPost } from "./mainAxios";

export function useProvideApi() {
	const [user, setUser] = React.useState(null);


	const NameFun = async (data) => {
		const result = await axiosPost("/repository/repository/", {
			otp: data.otp,
			track_id: data.track_id,
            provider: data.provider
		});
		return result;
	};



	return {
        NameFun,
	
	};
}
