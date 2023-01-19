import moment from "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js";

const store = window.localStorage;

const container = $(".container");

const now = moment();

const currentTime = { text: moment().format("h:00 A"), hour: moment().hour() };

$("#day").text(now.format("dddd MMMM DD, YYYY"));

const range = (start, end, step) => {
  return Array.from(
    Array.from(Array(Math.ceil((end - start) / step)).keys()),
    (x) => start + x * step
  );
};

const hoursOfTheDay = Array.from(new Array(24)).map((v, i) => {
  const text = moment().hour(i).format("h:00 A");
  const hour = moment().hour(i);
  return { text, hour };
});


// in the html.
(function color(time) {
  return time.text === currentTime.text
    ? "bg-green-200"
    : time.hour < now
    ? "bg-blue-200"
    : "bg-pink-300";
}

hours.foreach(hr) {
  const grid = $(
    '<form data-name="${hr.text}" class="grid grid-cols-12 border-silver-400"></form>'
  );

  const time = $(
    '<div class="flex item-center justify-center col-span-2 h-16"> ${hr.text}</div>'
  );

  const textArea = $(
    '<textArea  name="${hr.text}" "maxLength="40" style="resize: none; overflow: hidden"> ${store.getItem(hr.text)};
  }

  const saveButton = $(
    `<button type="submit" class="col-span-2 h-16 bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition duration-500 ease-in-out"><i class="fas fa-save text-xl"></i></button>`
    );
  
  grid.submit((e) => {
    e.preventDefault();
  
    const value = $(`textarea[name="${hr.text}"]`).val();
  
    store.setItem(hr.text, value);
    });
  
    grid.append(time);
    grid.append(textArea);
    grid.append(saveButton);
  
    container.append(grid);
 