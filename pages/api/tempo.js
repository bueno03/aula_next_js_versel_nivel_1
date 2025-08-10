async function tempo(request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString()
    })
}

// If there is more functions within this API, the default function called will be the "tempo"
export default tempo;