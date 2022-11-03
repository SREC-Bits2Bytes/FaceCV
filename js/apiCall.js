const apiCall = async (image) => {
    const data = {
        "image": image
    }
    const url = "https://o3z5wxbdh6.execute-api.ap-south-1.amazonaws.com/dev/security/mark-attendance"; 
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    });
    return await res.json();
}