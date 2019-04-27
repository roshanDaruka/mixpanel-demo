/* eslint-disable no-undef */
export const signupPageViewed = () => {
    mixpanel.track("Signup Page View");
}

export const accountCreated = (name, email) => {
    mixpanel.alias(email);
    mixpanel.track("Signup");
    mixpanel.people.set({
        $email: email,
        $name: name,
    })
}

export const login = (email) => {
    mixpanel.identify(email);
    mixpanel.track("Login");
}


export const carPurchase = (color, model) => {
    mixpanel.track("Car Purchased", {
        model,
        color,
    });
}