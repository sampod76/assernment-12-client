export const uploadeImg = async (image) => {
    const formData = new FormData()
    formData.append('image', image[0])

    // const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`
    const url = `https://api.imgbb.com/1/upload?key=df414536c62b8278623aa0a114d75d61`

    const img = await fetch(url, {
        method: "POST",
        headers: {
            headers: {
                'content-type': 'application/json',
                authorization: localStorage.getItem('token')
            },
        },
        body: formData
    });
    const imgUrl = await img.json();


    return imgUrl
}