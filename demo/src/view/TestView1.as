/**
 * Created by guoyili(guoyiligo@qq.com) on 2018/8/6.
 * Copyright (c) 2017 Yili Guo. All rights reserved.
 */
package view {
    import laya.utils.Handler;
    import laya.utils.Tween;
    
    import ui.TestUI;
    
    public class TestView1 {
        private var arr:Array = [];
        private var nu:int=0;
        public function TestView1() {
        }
        
        public function upTxt():void{
            if(arr.length>=1){
                for(var i:int=0;i<arr.length;i++){
                    Tween.to(arr[i],{y:arr[i].y-35},100);
                }
            }
            nu++;
            var obj:TestUI = new TestUI();
            arr.push(obj);
            obj.y = 350;
            obj.txt.text = nu+"";
            Laya.stage.addChild(obj);
            Tween.to(obj,{alpha:0.5},2000,null,new Handler(this,removeSelf,[obj]));
        }
        
        private function removeSelf(obj:TestUI):void{
            Laya.stage.removeChild(obj);
            arr.splice(arr.indexOf(obj),1);
        }
    }
}
