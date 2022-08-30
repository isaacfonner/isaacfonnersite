gdjs.MenuCode = {};
gdjs.MenuCode.GDMonkeObjects1= [];
gdjs.MenuCode.GDMonkeObjects2= [];
gdjs.MenuCode.GDChiChiTheBirdObjects1= [];
gdjs.MenuCode.GDChiChiTheBirdObjects2= [];
gdjs.MenuCode.GDBlockObjects1= [];
gdjs.MenuCode.GDBlockObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDHowToPlayObjects1= [];
gdjs.MenuCode.GDHowToPlayObjects2= [];
gdjs.MenuCode.GDleaderboardObjects1= [];
gdjs.MenuCode.GDleaderboardObjects2= [];
gdjs.MenuCode.GDSoundObjects1= [];
gdjs.MenuCode.GDSoundObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.condition4IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowToPlayObjects1Objects = Hashtable.newFrom({"HowToPlay": gdjs.MenuCode.GDHowToPlayObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDleaderboardObjects1Objects = Hashtable.newFrom({"leaderboard": gdjs.MenuCode.GDleaderboardObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MenuCode.GDSoundObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MenuCode.GDSoundObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClimbTower", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowToPlay"), gdjs.MenuCode.GDHowToPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowToPlayObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboard"), gdjs.MenuCode.GDleaderboardObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDleaderboardObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "29423682-c193-498b-8f38-3863dadc6590", true);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
gdjs.MenuCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("SoundOn", "Info", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Joy_of_the_Dice.mp3", 1, true, 100, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
gdjs.MenuCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.storage.writeNumberInJSONFile("SoundOn", "Info", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
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


{
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Joy_of_the_Dice.mp3", 1, true, 100, 1);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMonkeObjects1.length = 0;
gdjs.MenuCode.GDMonkeObjects2.length = 0;
gdjs.MenuCode.GDChiChiTheBirdObjects1.length = 0;
gdjs.MenuCode.GDChiChiTheBirdObjects2.length = 0;
gdjs.MenuCode.GDBlockObjects1.length = 0;
gdjs.MenuCode.GDBlockObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDHowToPlayObjects1.length = 0;
gdjs.MenuCode.GDHowToPlayObjects2.length = 0;
gdjs.MenuCode.GDleaderboardObjects1.length = 0;
gdjs.MenuCode.GDleaderboardObjects2.length = 0;
gdjs.MenuCode.GDSoundObjects1.length = 0;
gdjs.MenuCode.GDSoundObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
