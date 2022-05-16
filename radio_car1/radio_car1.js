var obniz = new Obniz("OBNIZ_ID_HERE");
        obniz.onconnect = async function () {
            //obniz.io6.output(true);
            //obniz.io9.output(false);
            //var cam = obniz.wired("JpegSerialCam", { vcc: 4, cam_tx: 5, cam-rx: 6, gnd: 3});

            var motorLeft = obniz.wired("DCMotor", { forward: 0, back: 1 });
            var motorRight = obniz.wired("DCMotor", { forward: 2, back: 3 });
            

            //await cam.startWait({ baud: 38400 });
            //await cam.setBaudWait(115200);
            //await cam.setSizeWait("160x120");

            /*while (true) {
                const jpegData = await cam.takeWait();
                document.getElementById("image").src = "data:image/jpeg;base64," + cam.arrayToBase64(jpegData);
            }
            */

            // forwardleft
            $("#forwardleft").on('touchstart mousedown', () => {
                motorLeft.power(50);
                motorRight.power(100);
                motorLeft.reverse();  //ボタンを押すと動く
                motorRight.reverse();
            })

            // forward
            $("#forward").on('touchstart mousedown', () => {
                motorLeft.power(100);
                motorRight.power(100);
                motorLeft.reverse();  //ボタンを押すと動く
                motorRight.reverse();
            })

            // forwardleft
            $("#forwardright").on('touchstart mousedown', () => {
                motorLeft.power(100);
                motorRight.power(50);
                motorLeft.reverse();  //ボタンを押すと動く
                motorRight.reverse();
            })
            

            // turn right
            $("#right").on('touchstart mousedown', () => {
                motorLeft.power(100);
                motorRight.power(100);
                motorLeft.reverse();  //ボタンを押すと動く
                motorRight.forward();
            })
            

            // turn left
            $("#left").on('touchstart mousedown', () => {
                motorLeft.power(100);
                motorRight.power(100);
                motorRight.reverse();  //ボタンを押すと動く
                motorLeft.forward();
            })
            

            // reverse
            $("#reverse").on('touchstart mousedown', () => {
                motorLeft.power(100);
                motorRight.power(100);
                motorRight.forward();  //ボタンを押すと動く
                motorLeft.forward();
            })
            

            $("#stop").on('touchstart mousedown', () => {
                motorRight.stop();  //ボタンを押すと動く
                motorLeft.stop();
            })

        }
