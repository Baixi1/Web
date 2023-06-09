// const Pin = require('../models/pin');

// const createPin = async (req, res) => {
//     try {
//       const pinDetails = req.body;
  
//       // สร้างและบันทึกข้อมูล Pin ในฐานข้อมูล
//       const pin = new Pin({ pinDetails });
//       await pin.save();
  
//       res.status(201).json({ message: 'Pin saved successfully' });
//     } catch (error) {
//       console.error('Failed to save pin', error);
//       res.status(500).json({ message: 'Failed to save pin' });
//     }
// };

// module.exports = {createPin,};
// // ตัวอย่างการดึงข้อมูล pin ทั้งหมด
// exports.getAllPins = async (req, res) => {
//   try {
//     const pins = await Pin.find();
//     res.json(pins);
//   } catch (error) {
//     res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูล pin' });
//   }
// };

// // ตัวอย่างการเพิ่ม pin ใหม่
// exports.createPin = async (req, res) => {
//   try {
//     const newPin = new Pin(req.body);
//     const savedPin = await newPin.save();
//     res.json(savedPin);
//   } catch (error) {
//     res.status(500).json({ error: 'เกิดข้อผิดพลาดในการเพิ่ม pin' });
//   }
// };

// exports.getPinImage = async (req, res) => {
//     try {
//         const pinId = req.params.id;
//         const pin = await Pin.findById(pinId);
//         if (!pin) {
//           return res.status(404).json({ message: 'Pin not found' });
//         }
  
//         // ตรวจสอบและส่งรูปภาพกลับไปยัง client
//         if (pin.image) {
//           res.set('Content-Type', 'image/jpeg');
//           res.send(pin.image);
//         } else {
//           res.status(404).json({ message: 'Pin image not found' });
//         }
//       } catch (error) {
//         console.error('Error fetching pin image:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

