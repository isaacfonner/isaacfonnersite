gdjs.TutorialCode = {};
gdjs.TutorialCode.GDMonkeObjects1= [];
gdjs.TutorialCode.GDMonkeObjects2= [];
gdjs.TutorialCode.GDChiChiTheBirdObjects1= [];
gdjs.TutorialCode.GDChiChiTheBirdObjects2= [];
gdjs.TutorialCode.GDBlockObjects1= [];
gdjs.TutorialCode.GDBlockObjects2= [];
gdjs.TutorialCode.GDoutlineObjects1= [];
gdjs.TutorialCode.GDoutlineObjects2= [];
gdjs.TutorialCode.GDClickObjects1= [];
gdjs.TutorialCode.GDClickObjects2= [];
gdjs.TutorialCode.GDDownObjects1= [];
gdjs.TutorialCode.GDDownObjects2= [];
gdjs.TutorialCode.GDAvoidObjects1= [];
gdjs.TutorialCode.GDAvoidObjects2= [];
gdjs.TutorialCode.GDFallObjects1= [];
gdjs.TutorialCode.GDFallObjects2= [];
gdjs.TutorialCode.GDNewSpriteObjects1= [];
gdjs.TutorialCode.GDNewSpriteObjects2= [];
gdjs.TutorialCode.GDBirdMoveObjects1= [];
gdjs.TutorialCode.GDBirdMoveObjects2= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.TutorialCode.condition2IsTrue_0 = {val:false};
gdjs.TutorialCode.condition3IsTrue_0 = {val:false};
gdjs.TutorialCode.conditionTrue_1 = {val:false};
gdjs.TutorialCode.condition0IsTrue_1 = {val:false};
gdjs.TutorialCode.condition1IsTrue_1 = {val:false};
gdjs.TutorialCode.condition2IsTrue_1 = {val:false};
gdjs.TutorialCode.condition3IsTrue_1 = {val:false};


gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.TutorialCode.GDNewSpriteObjects1});
gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TutorialCode.GDNewSpriteObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
gdjs.TutorialCode.condition2IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TutorialCode.condition1IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition2IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8962140);
}
}}
}
if (gdjs.TutorialCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


{
}

}


{


{
{gdjs.evtTools.storage.readNumberFromJSONFile("SoundOn", "Info", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Joy_of_the_Dice.mp3", 1, true, 100, 1);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDMonkeObjects1.length = 0;
gdjs.TutorialCode.GDMonkeObjects2.length = 0;
gdjs.TutorialCode.GDChiChiTheBirdObjects1.length = 0;
gdjs.TutorialCode.GDChiChiTheBirdObjects2.length = 0;
gdjs.TutorialCode.GDBlockObjects1.length = 0;
gdjs.TutorialCode.GDBlockObjects2.length = 0;
gdjs.TutorialCode.GDoutlineObjects1.length = 0;
gdjs.TutorialCode.GDoutlineObjects2.length = 0;
gdjs.TutorialCode.GDClickObjects1.length = 0;
gdjs.TutorialCode.GDClickObjects2.length = 0;
gdjs.TutorialCode.GDDownObjects1.length = 0;
gdjs.TutorialCode.GDDownObjects2.length = 0;
gdjs.TutorialCode.GDAvoidObjects1.length = 0;
gdjs.TutorialCode.GDAvoidObjects2.length = 0;
gdjs.TutorialCode.GDFallObjects1.length = 0;
gdjs.TutorialCode.GDFallObjects2.length = 0;
gdjs.TutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.TutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.TutorialCode.GDBirdMoveObjects1.length = 0;
gdjs.TutorialCode.GDBirdMoveObjects2.length = 0;

gdjs.TutorialCode.eventsList0(runtimeScene);
return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
