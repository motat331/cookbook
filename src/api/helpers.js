import auth from '@react-native-firebase/auth';

class RequestError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}

async function post(url, data, isPublic = false) {
    let token = null;
    if (!isPublic) {
        token = await auth().currentUser.getIdToken();
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
    }
    const responseText = await response.text();
    throw new RequestError(response.status, responseText);
}

async function put(url, data) {
    const token = await auth().currentUser.getIdToken();
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
    }
    const responseText = await response.text();
    throw new RequestError(response.status, responseText);
}

const get = async (url, isPublic = false) => {
    let token = null;
    if (!isPublic) {
        token = await auth()?.currentUser?.getIdToken();
    }
    console.log('Token: ', token);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });

    if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
    }

    console.log('Response: ', response);

    const responseText = await response.text();
    console.log('Response Text: ', responseText);
    throw new RequestError(response.status, responseText);
};

const del = async (url, data) => {
    const token = await auth().currentUser.getIdToken();
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
    }
    const responseText = await response.text();
    throw new RequestError(response.status, responseText);
};

export { get, post, put, del };
