export function convertHMS(value: number): string {
  let hours = Math.floor(value / 3600); // get hours
  let minutes = Math.floor((value - hours * 3600) / 60); // get minutes
  //   let seconds = value - hours * 3600 - minutes * 60; //  get seconds

  return hours + "h " + minutes + "min";
}

export const findThumbnail = (
  type: "header" | "card" | "poster",
  record: Record<string, any>
) => {
  // console.log("Record", record);
  if (
    record.plprogram$thumbnails &&
    Object.keys(record.plprogram$thumbnails).length > 0
  ) {
    let maxWSize: number;
    let minWSize: number;

    let maxHSize: number;
    let minHSize: number;

    // set needed size based on type
    switch (type) {
      case "header":
        maxWSize = window.innerWidth;
        minWSize = window.innerWidth - 1000;

        maxHSize = window.innerHeight * 2;
        minHSize = maxHSize * 0.5;
        break;
      case "card":
        maxWSize = 600;
        minWSize = 400;

        maxHSize = 600;
        minHSize = maxHSize * 0.6;
        break;
      case "poster":
        maxWSize = 700;
        minWSize = 400;

        maxHSize = 600;
        minHSize = maxHSize * 0.8;
    }

    let thumbArray: Record<string, any>[] = Object.values(
      record.plprogram$thumbnails
    );

    // console.log("thumbArray: " + record);

    let sortedData = thumbArray.filter(
      (thumbnail: Record<string, any>) =>
        thumbnail.plprogram$width <= maxWSize &&
        thumbnail.plprogram$height <= maxHSize
    );
    let filteredData = sortedData.sort(
      (a, b) =>
        b.plprogram$width - a.plprogram$width &&
        b.plprogram$height - a.plprogram$height
    );
    // console.log("Filtered data: " + filteredData);
    return filteredData[0].plprogram$url;
  } else {
    console.log("doesn't exist");
    return null;
  }
};
