const dateFormatter = (datetime: string) => {
    const dateSplit = datetime.split("T");
    const date = dateSplit[0];
    const time = dateSplit[1].split(".")[0];
    return [date, time];
}

export default dateFormatter;