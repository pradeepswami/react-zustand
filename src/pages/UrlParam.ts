
export const  parseUrlParamTojson = (searchParams: URLSearchParams) => {
    const data  = {};
    for (const [key, value] of searchParams.entries()) {
        data[key] = value;
    }
    return data;
}
    