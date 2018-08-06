/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.display.Text;

	public class TestUI extends View {
		public var txt:Text;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Text","props":{"y":0,"x":0,"width":212,"var":"txt","text":"text","height":35,"fontSize":30,"color":"#b92522"}}]};
		override protected function createChildren():void {
			View.regComponent("Text",Text);
			super.createChildren();
			createView(uiView);

		}

	}
}