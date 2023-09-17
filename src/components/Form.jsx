import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "India",
        address: "",
        city: "",
        stateOrProvince: "",
        postalCode: "",
        comments: false,
        candidates: false,
        offers: false,
        pushNotifications: "everything",
    });

    function changeHandler(event) {
        const { type, name, value, checked } = event.target;
        setFormData((previousFormData) => {
            return {
                ...previousFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form
            onSubmit={submitHandler}
            className="w-11/12 md:w-10/12 max-w-xl mx-auto flex flex-col gap-y-4 pt-8 pb-12"
        >
            <div className="field-container">
                <label htmlFor="first-name" className="label-styling">
                    First Name
                </label>
                <input
                    type="text"
                    placeholder="Bhomik"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                    className="text-input-styling"
                />
            </div>
            <div className="field-container">
                <label htmlFor="last-name" className="label-styling">
                    Last Name
                </label>
                <input
                    type="text"
                    placeholder="Ranjan"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeHandler}
                    className="text-input-styling"
                />
            </div>
            <div className="field-container">
                <label htmlFor="email" className="label-styling">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="bhomikranjan3@gmail.com"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="text-input-styling"
                />
            </div>
            <div className="field-container">
                <label htmlFor="country" className="label-styling">
                    Country
                </label>
                <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={changeHandler}
                    className="text-gray-900 bg-white border border-blue-500 rounded-md focus:outline-none focus:border-black transition-colors duration-200 px-2 py-1"
                >
                    <option value="India" className="">
                        India
                    </option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                </select>
            </div>
            <div className="field-container">
                <label htmlFor="address" className="label-styling">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="C-3/89"
                    value={formData.address}
                    onChange={changeHandler}
                    className="text-input-styling"
                />
            </div>
            <div className="field-container">
                <label htmlFor="city" className="label-styling">
                    City
                </label>
                <input
                    type="text"
                    id="city"
                    placeholder="Keshav Puram"
                    name="city"
                    value={formData.city}
                    onChange={changeHandler}
                    className="text-input-styling"
                />
            </div>
            <div className="field-container">
                <label htmlFor="state-or-province" className="label-styling">
                    State / Province
                </label>
                <input
                    type="text"
                    id="state-or-province"
                    placeholder="Delhi"
                    name="stateOrProvince"
                    value={formData.stateOrProvince}
                    onChange={changeHandler}
                    className="text-input-styling"
                />
            </div>
            <div className="field-container">
                <label htmlFor="postal-code" className="label-styling">
                    ZIP / Postal code
                </label>
                <input
                    type="text"
                    id="postal-code"
                    placeholder="110035"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={changeHandler}
                    className="text-input-styling"
                />
            </div>
            <fieldset className="flex flex-col gap-y-3">
                <legend className="font-medium text-gray-900 tracking-wider pb-2">
                    By Email
                </legend>
                <div className="flex items-center gap-x-3">
                    <input
                        type="checkbox"
                        id="comments"
                        name="comments"
                        checked={formData.comments}
                        onChange={changeHandler}
                        className="w-4 aspect-square rounded"
                    />
                    <div>
                        <label htmlFor="comments" className="label-styling">
                            Comments
                        </label>
                        <p className="text-gray-500 leading-none">
                            Get notified when someone comments on a post.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                        type="checkbox"
                        id="candidates"
                        name="candidates"
                        checked={formData.candidates}
                        onChange={changeHandler}
                        className="w-4 aspect-square rounded"
                    />
                    <div>
                        <label htmlFor="candidates" className="label-styling">
                            Candidates
                        </label>
                        <p className="text-gray-500 leading-none">
                            Get notified when a candidate applies for a job.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <input
                        type="checkbox"
                        id="offers"
                        name="offers"
                        checked={formData.offers}
                        onChange={changeHandler}
                        className="w-4 aspect-square rounded"
                    />
                    <div>
                        <label htmlFor="offers" className="label-styling">
                            Offers
                        </label>
                        <p className="text-gray-500 leading-none">
                            Get notified when a candidate accepts or rejects an
                            offer.
                        </p>
                    </div>
                </div>
            </fieldset>
            <fieldset className="flex flex-col gap-y-3">
                <legend className="font-medium text-gray-900 tracking-wider">
                    Push Notifications
                </legend>
                <p className="text-gray-500 leading-none">
                    These are delivered via SMS to your mobile phone.
                </p>
                <div className="flex items-center gap-x-2">
                    <input
                        type="radio"
                        id="everything"
                        name="pushNotifications"
                        value="everything"
                        onChange={changeHandler}
                        checked={formData.pushNotifications === "everything"}
                        className="w-4 aspect-square"
                    />
                    <label htmlFor="everything" className="label-styling">
                        Everything
                    </label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        type="radio"
                        id="same-as-email"
                        name="pushNotifications"
                        value="same as email"
                        onChange={changeHandler}
                        checked={formData.pushNotifications === "same as email"}
                        className="w-4 aspect-square"
                    />
                    <label htmlFor="same-as-email" className="label-styling">
                        Same as email
                    </label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        type="radio"
                        id="no-push-notification"
                        name="pushNotifications"
                        value="no push notification"
                        onChange={changeHandler}
                        checked={
                            formData.pushNotifications ===
                            "no push notification"
                        }
                        className="w-4 aspect-square"
                    />
                    <label
                        htmlFor="no-push-notification"
                        className="label-styling"
                    >
                        No push notifications
                    </label>
                </div>
            </fieldset>
            <button
                type="submit"
                className="w-fit font-medium text-white tracking-wider bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 px-3 py-1.5"
            >
                Submit
            </button>
        </form>
    );
}

export default Form;
