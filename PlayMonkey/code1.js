gdjs.leaderboardCode = {};
gdjs.leaderboardCode.GDNameObjects1_1final = [];

gdjs.leaderboardCode.GDMonkeObjects1= [];
gdjs.leaderboardCode.GDMonkeObjects2= [];
gdjs.leaderboardCode.GDChiChiTheBirdObjects1= [];
gdjs.leaderboardCode.GDChiChiTheBirdObjects2= [];
gdjs.leaderboardCode.GDBlockObjects1= [];
gdjs.leaderboardCode.GDBlockObjects2= [];
gdjs.leaderboardCode.GDNameObjects1= [];
gdjs.leaderboardCode.GDNameObjects2= [];
gdjs.leaderboardCode.GDNewSpriteObjects1= [];
gdjs.leaderboardCode.GDNewSpriteObjects2= [];
gdjs.leaderboardCode.GDNewTextObjects1= [];
gdjs.leaderboardCode.GDNewTextObjects2= [];
gdjs.leaderboardCode.GDSumbitObjects1= [];
gdjs.leaderboardCode.GDSumbitObjects2= [];
gdjs.leaderboardCode.GDScoreObjects1= [];
gdjs.leaderboardCode.GDScoreObjects2= [];
gdjs.leaderboardCode.GDErrorObjects1= [];
gdjs.leaderboardCode.GDErrorObjects2= [];
gdjs.leaderboardCode.GDOpenKeyboardObjects1= [];
gdjs.leaderboardCode.GDOpenKeyboardObjects2= [];

gdjs.leaderboardCode.conditionTrue_0 = {val:false};
gdjs.leaderboardCode.condition0IsTrue_0 = {val:false};
gdjs.leaderboardCode.condition1IsTrue_0 = {val:false};
gdjs.leaderboardCode.condition2IsTrue_0 = {val:false};
gdjs.leaderboardCode.condition3IsTrue_0 = {val:false};
gdjs.leaderboardCode.condition4IsTrue_0 = {val:false};
gdjs.leaderboardCode.conditionTrue_1 = {val:false};
gdjs.leaderboardCode.condition0IsTrue_1 = {val:false};
gdjs.leaderboardCode.condition1IsTrue_1 = {val:false};
gdjs.leaderboardCode.condition2IsTrue_1 = {val:false};
gdjs.leaderboardCode.condition3IsTrue_1 = {val:false};
gdjs.leaderboardCode.condition4IsTrue_1 = {val:false};


gdjs.leaderboardCode.mapOfGDgdjs_46leaderboardCode_46GDSumbitObjects1Objects = Hashtable.newFrom({"Sumbit": gdjs.leaderboardCode.GDSumbitObjects1});
gdjs.leaderboardCode.asyncCallback8929060 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "29423682-c193-498b-8f38-3863dadc6590", true);
}}
gdjs.leaderboardCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.leaderboardCode.asyncCallback8929060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.leaderboardCode.mapOfGDgdjs_46leaderboardCode_46GDSumbitObjects1Objects = Hashtable.newFrom({"Sumbit": gdjs.leaderboardCode.GDSumbitObjects1});
gdjs.leaderboardCode.asyncCallback8930820 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Error"), gdjs.leaderboardCode.GDErrorObjects2);

{for(var i = 0, len = gdjs.leaderboardCode.GDErrorObjects2.length ;i < len;++i) {
    gdjs.leaderboardCode.GDErrorObjects2[i].hide();
}
}}
gdjs.leaderboardCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.leaderboardCode.GDErrorObjects1) asyncObjectsList.addObject("Error", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.leaderboardCode.asyncCallback8930820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.leaderboardCode.mapOfGDgdjs_46leaderboardCode_46GDOpenKeyboardObjects1Objects = Hashtable.newFrom({"OpenKeyboard": gdjs.leaderboardCode.GDOpenKeyboardObjects1});
gdjs.leaderboardCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.leaderboardCode.GDNameObjects1);
{for(var i = 0, len = gdjs.leaderboardCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.leaderboardCode.GDNameObjects1[i].activate(true);
}
}}

}


{

gdjs.leaderboardCode.GDNameObjects1.length = 0;


gdjs.leaderboardCode.condition0IsTrue_0.val = false;
{
{gdjs.leaderboardCode.conditionTrue_1 = gdjs.leaderboardCode.condition0IsTrue_0;
gdjs.leaderboardCode.GDNameObjects1_1final.length = 0;gdjs.leaderboardCode.condition0IsTrue_1.val = false;
gdjs.leaderboardCode.condition1IsTrue_1.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
if( gdjs.leaderboardCode.condition0IsTrue_1.val ) {
    gdjs.leaderboardCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.leaderboardCode.GDNameObjects2);
for(var i = 0, k = 0, l = gdjs.leaderboardCode.GDNameObjects2.length;i<l;++i) {
    if ( gdjs.leaderboardCode.GDNameObjects2[i].getString() != "" ) {
        gdjs.leaderboardCode.condition1IsTrue_1.val = true;
        gdjs.leaderboardCode.GDNameObjects2[k] = gdjs.leaderboardCode.GDNameObjects2[i];
        ++k;
    }
}
gdjs.leaderboardCode.GDNameObjects2.length = k;if( gdjs.leaderboardCode.condition1IsTrue_1.val ) {
    gdjs.leaderboardCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.leaderboardCode.GDNameObjects2.length;j<jLen;++j) {
        if ( gdjs.leaderboardCode.GDNameObjects1_1final.indexOf(gdjs.leaderboardCode.GDNameObjects2[j]) === -1 )
            gdjs.leaderboardCode.GDNameObjects1_1final.push(gdjs.leaderboardCode.GDNameObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.leaderboardCode.GDNameObjects1_1final, gdjs.leaderboardCode.GDNameObjects1);
}
}
}if (gdjs.leaderboardCode.condition0IsTrue_0.val) {
/* Reuse gdjs.leaderboardCode.GDNameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.leaderboardCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.leaderboardCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.leaderboardCode.GDNewTextObjects1[i].setString((( gdjs.leaderboardCode.GDNameObjects1.length === 0 ) ? "" :gdjs.leaderboardCode.GDNameObjects1[0].getString()));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.leaderboardCode.GDScoreObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Score", "MonkeScore", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.leaderboardCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.leaderboardCode.GDScoreObjects1[i].setString("Score = " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.leaderboardCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sumbit"), gdjs.leaderboardCode.GDSumbitObjects1);

gdjs.leaderboardCode.condition0IsTrue_0.val = false;
gdjs.leaderboardCode.condition1IsTrue_0.val = false;
gdjs.leaderboardCode.condition2IsTrue_0.val = false;
gdjs.leaderboardCode.condition3IsTrue_0.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.leaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.leaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.leaderboardCode.mapOfGDgdjs_46leaderboardCode_46GDSumbitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.leaderboardCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.leaderboardCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.leaderboardCode.GDNameObjects1[i].getString() != "" ) {
        gdjs.leaderboardCode.condition2IsTrue_0.val = true;
        gdjs.leaderboardCode.GDNameObjects1[k] = gdjs.leaderboardCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.leaderboardCode.GDNameObjects1.length = k;}if ( gdjs.leaderboardCode.condition2IsTrue_0.val ) {
{
{gdjs.leaderboardCode.conditionTrue_1 = gdjs.leaderboardCode.condition3IsTrue_0;
gdjs.leaderboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8928948);
}
}}
}
}
if (gdjs.leaderboardCode.condition3IsTrue_0.val) {
/* Reuse gdjs.leaderboardCode.GDNameObjects1 */
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "29423682-c193-498b-8f38-3863dadc6590", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), (( gdjs.leaderboardCode.GDNameObjects1.length === 0 ) ? "" :gdjs.leaderboardCode.GDNameObjects1[0].getString()));
}
{ //Subevents
gdjs.leaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.leaderboardCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sumbit"), gdjs.leaderboardCode.GDSumbitObjects1);

gdjs.leaderboardCode.condition0IsTrue_0.val = false;
gdjs.leaderboardCode.condition1IsTrue_0.val = false;
gdjs.leaderboardCode.condition2IsTrue_0.val = false;
gdjs.leaderboardCode.condition3IsTrue_0.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.leaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.leaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.leaderboardCode.mapOfGDgdjs_46leaderboardCode_46GDSumbitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.leaderboardCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.leaderboardCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.leaderboardCode.GDNameObjects1[i].getString() == "" ) {
        gdjs.leaderboardCode.condition2IsTrue_0.val = true;
        gdjs.leaderboardCode.GDNameObjects1[k] = gdjs.leaderboardCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.leaderboardCode.GDNameObjects1.length = k;}if ( gdjs.leaderboardCode.condition2IsTrue_0.val ) {
{
{gdjs.leaderboardCode.conditionTrue_1 = gdjs.leaderboardCode.condition3IsTrue_0;
gdjs.leaderboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8930220);
}
}}
}
}
if (gdjs.leaderboardCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Error"), gdjs.leaderboardCode.GDErrorObjects1);
{for(var i = 0, len = gdjs.leaderboardCode.GDErrorObjects1.length ;i < len;++i) {
    gdjs.leaderboardCode.GDErrorObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.leaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.leaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.leaderboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Error"), gdjs.leaderboardCode.GDErrorObjects1);
{for(var i = 0, len = gdjs.leaderboardCode.GDErrorObjects1.length ;i < len;++i) {
    gdjs.leaderboardCode.GDErrorObjects1[i].hide();
}
}}

}


{


gdjs.leaderboardCode.condition0IsTrue_0.val = false;
gdjs.leaderboardCode.condition1IsTrue_0.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}if ( gdjs.leaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.leaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}}
if (gdjs.leaderboardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


gdjs.leaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.isLeaderboardViewLoaded();
}if (gdjs.leaderboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}}

}


{


{
}

}


{


{
{gdjs.evtTools.storage.readNumberFromJSONFile("SoundOn", "Info", runtimeScene, runtimeScene.getVariables().getFromIndex(3));
}}

}


{


gdjs.leaderboardCode.condition0IsTrue_0.val = false;
gdjs.leaderboardCode.condition1IsTrue_0.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.leaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.leaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}}
if (gdjs.leaderboardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Joy_of_the_Dice.mp3", 1, true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenKeyboard"), gdjs.leaderboardCode.GDOpenKeyboardObjects1);

gdjs.leaderboardCode.condition0IsTrue_0.val = false;
gdjs.leaderboardCode.condition1IsTrue_0.val = false;
{
gdjs.leaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.leaderboardCode.mapOfGDgdjs_46leaderboardCode_46GDOpenKeyboardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.leaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.leaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.leaderboardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.leaderboardCode.GDNameObjects1);
{for(var i = 0, len = gdjs.leaderboardCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.leaderboardCode.GDNameObjects1[i].getBehavior("TextEntryVirtualKeyboard").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.leaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.leaderboardCode.GDMonkeObjects1.length = 0;
gdjs.leaderboardCode.GDMonkeObjects2.length = 0;
gdjs.leaderboardCode.GDChiChiTheBirdObjects1.length = 0;
gdjs.leaderboardCode.GDChiChiTheBirdObjects2.length = 0;
gdjs.leaderboardCode.GDBlockObjects1.length = 0;
gdjs.leaderboardCode.GDBlockObjects2.length = 0;
gdjs.leaderboardCode.GDNameObjects1.length = 0;
gdjs.leaderboardCode.GDNameObjects2.length = 0;
gdjs.leaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.leaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.leaderboardCode.GDNewTextObjects1.length = 0;
gdjs.leaderboardCode.GDNewTextObjects2.length = 0;
gdjs.leaderboardCode.GDSumbitObjects1.length = 0;
gdjs.leaderboardCode.GDSumbitObjects2.length = 0;
gdjs.leaderboardCode.GDScoreObjects1.length = 0;
gdjs.leaderboardCode.GDScoreObjects2.length = 0;
gdjs.leaderboardCode.GDErrorObjects1.length = 0;
gdjs.leaderboardCode.GDErrorObjects2.length = 0;
gdjs.leaderboardCode.GDOpenKeyboardObjects1.length = 0;
gdjs.leaderboardCode.GDOpenKeyboardObjects2.length = 0;

gdjs.leaderboardCode.eventsList2(runtimeScene);
return;

}

gdjs['leaderboardCode'] = gdjs.leaderboardCode;
