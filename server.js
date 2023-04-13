import express from "express";
import five from "johnny-five";
const app = express();
const PORT = process.env.PORT || 3000;
const board = new five.Board();

let data;

board.on("ready", () => {
    // const sensor = new five.Sensor("A0");

	const led = new five.Led(13);
	led.blink(500);
    // sensor.on("change", () => {
    //     data = sensor.value;
    // });
});

app.get("/", (req, res) => {
    return res.json({
        data,
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
