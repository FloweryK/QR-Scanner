# How to Install

### react-native-camera 설치

https://react-native-camera.github.io/react-native-camera/docs/installation

※ QR scan을 위해서는 react-native-camera에서 MLKit 추가 설정을 해줘야 하므로, 꼼꼼히 읽을 것



### 기본 사용법

```javascript
const BarcodeDetected = ({barcodes}) => {
    barcodes.forEach(barcode => console.warn(barcode.data));
  };

<RNCamera ...
	onGoogleVisionBarcodesDetected={BarcodeDetected}
/>

// result
// WARN: "안녕하세요! QR코드입니다!"
```



###### onGoogleVisionBarcodeDetected가 뱉는 전체 데이터

```json
[
	{
		"bounds": 
			{
				"origin": {"x": 127.31481481481481, "y": 48.28571644425392}, 
				"size": {"height": 109.71429061889648, "width": 169.44444444444446}
			}, 
			"data": "안녕하세요! QR코드입니다!", 
			"dataRaw": "안녕하세요! QR코드입니다!", 
			"format": "QR_CODE", 
			"type": "TEXT"
		}
]
```



### 기타

온라인 qr 코드 생성기: https://ko.online-qrcode-generator.com/

