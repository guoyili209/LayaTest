package {
	import laya.webgl.WebGL;
	import laya.utils.Byte;
	public class LayaSample {
		
		public function LayaSample() {
			//初始化引擎
			Laya.init(1136, 640,WebGL);
			
			var str:String = "汉字测试";
			var byte:Byte = new Byte();
			byte.writeUTFString(str);
			var len:int = byte.length;
			trace(len);
		}		
	}
}