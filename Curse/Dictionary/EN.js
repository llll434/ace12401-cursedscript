// These are the default texts when the tag is missing in the translated language
// If a tag is modified, it will bear "V2" after it and it will be required for translator to verify its counter part in their language
// %PLAYER% is a placeholder, it will be replaced by the player's name. "The curse on %PLAYER%" becomes "The curse on ace", for example.
// {0}, {1}... are placeholders where the extra text based on variables will be inserted. You can place that text where it fits in your own language.
var cursedEN = {
    "System": "System",
    "Curse": "Curse",
    "Tip": "Tip",
    "Error": "Error",
    // --LAST FR TRANSLATION HERE--
    "Reminder": "Reminder",
    "Error: W02": "(The curse tried to send a whisper longer than 1000 characters which the server cannot handle. Please watch your configurations to prevent this from happening. The message was trimmed. Error: W02)",
    "Error: C01": "(The curse tried to send a message longer than 1000 characters which the server cannot handle. Please watch your configurations to prevent this from happening. The message was trimmed. Error: C01)",
    "WhisperSent": "Whisper sent to {0}",
    "LarpWarn": "LARP Room detected: the curse is inactive in this room",
    "OnRestart": "Your current curses have been applied with no punishments.",
    "ERROR S011": "ERROR S011: Spam detected, the curse sent too many messages too quickly, it has been disabled. Please correct the issue before re-enabling the script. If it was a bug, please contact Ace__#5558 on discord",
    "IntenseOn": "Intense mode is on (risky).",
    "WeeklyReset": "A new week has begun, your automatic strike counter has been reset.",
    "DCPreventionOn": "DC prevention enabled, the wearer was sent back to the room she was previously locked in. If this is not a room you should be locked in, please disable the curse, relog and go into another room before reactivating the curse, avoid disturbing others.",
    "HoodMigration": "Your cursed hood was not reapplied while migrating to a newer version, use curseitem command to reapply it.",
    "InvalidCurse": "An invalid curse was found and removed, this might be caused by a new version of the club if an item was removed or moved to another group.",
    "BlockedCurse": "An attempt was made to activate the curse on a group for which the item is blocked, the curse on the related group has been lifted. Unblock the following item if you want to curse it: {0} {1}",
    "Error P04": "Error P04: The curse was deactivated because it tried to apply more than one curse to the same group. Please report this issues and how it happened. Adjust your settings accordingly to prevent this error. (Please disable conflicting curses)",
    "WarnEnforce": "Reminder: You must be on your knees when you first see someone in this room.(Someone is enforced)",
    "KneelAnger": " %PLAYER% angers the curse on her as she forgets to kneel.",
    "CurseArise": "The curse arises on  %PLAYER%'s {0}",
    "CurseLift": "The curse on  %PLAYER%'s {0} was lifted",
    "ClothesArise": "The curse arises on  %PLAYER%'s clothes",
    "ClothesLift": "The curse on  %PLAYER%'s clothes was lifted",
    "RestoredItem": "{0} was restored ({1})",
    "RemovedItem": "{0} was removed ({1})",
    "ERRORT100": "ERROR T100: you have accumulated too many transgressions. Please have your curse owner clear your transgressions list to make room for new ones (cleartrangressions command). Your oldest transgressions on your record will now be deleted one by one",
    "NotSaved": "Your curse configs were not saved. Check the console for errors and report the issue if necessary.",
    "SaveColorDone": "Your current colors in each item slot has been saved.",
    "ErrorSC07": "An error occured while trying to save your colors. Error: SC07",
    "DeckShuffledAuto": "The deck was shuffled because it was empty.",
    "DeckShuffledRequest": "The deck was shuffled because it was requested by the dealer.",
    "DeckDrawnGlobal": "You drew the following card(s): {0}",
    "DeckDrawnWhisper": "(The following card was drawn: {0})",
    "NeedIntenseOn": "(Will only work if intense mode is turned on.)",
    "OwnerModeOn": "(The wearer is running the curse in owner mode. This means no one can interact with their curse.)",
    "WarnOptinOff": "(The opt-in command {0} is disabled. The wearer needs to turn it on if they wish to.)",
    "WarnOptinWearer": 'If you wish to turn on an optin command, you need to do "{0} togglecommand {1}". Opt-in commands are usually more restrictive or troublesome. Think twice before enabling this command.',
    "WarnBlacklist": "(The command {0} is disabled. The wearer needs to remove it from their blacklist if they wish to.)",
    "WarnBlacklistWearer": 'If you wish to re-enable a command, you need to do "{0} togglecommand {1}".',
    "AFKTimerTrigger": "(Was AFK for more than 5 minutes and got punished accordingly.)",
    "DraggedOutWearerCapture": "You have been sent to the room {0} by your captor, the messages above this one are from the previous room.",
    "DraggedOutAction": "%PLAYER% was dragged out by her captor.",
    "LeashAction": "%PLAYER% was leashed out by her owner.",
    "LeashWearer": "You have been sent to the room {0} by your owner, the messages above this one are from the previous room.",
    "PunishOrgasm": "The curse on %PLAYER% punishes her for orgasming when her owner forbade her.",
    "NoRescueGambling": "Gambling Hall is disabled when the no NPC rescue curse is enabled. Turn off the curse temporarily if you wish to come in. ->Going back to the main hall <-",
    "NoRescueNursery": "The nursery is disabled when the no NPC rescue curse is enabled. Turn off the curse temporarily if you wish to come in. ->Going back to the main hall <-",
    "LockSubOn": "Cannot collar new submissives.",
    "LockSubOff": "Can collar players again.",
    "LockLoverOn": "Cannot have new lovers.",
    "LockLoverOff": "Can have new lovers.",
    "LockOwnerOn": "The curse keeps %PLAYER% from leaving her owner.",
    "LockOwnerOff": "The curse allows %PLAYER% to break her collar.",
    "LooseOwnerOn": "(Curse owners are now allowed to use built-in club rules. WARNING: These official built-in club rules are not tied to the curse, this means disabling the curse will not disable club rules like confiscating remotes, locks, or blocking wardrobe changes)",
    "LooseOwnerOff": "(Curse owners are no longer allowed to use built-in club rules.)",
    "AllShowStrikes": "%PLAYER% has accumulated a total of {0} strikes.",
    "AllShowTransgressions": "Transgression(s) to report: {0}",
    "AllShowlistoffcommands": "The following commands are disabled: {0}",
    "asylumtimeleft": "%PLAYER% has {0} hours left in the asylum",
    "OtherWhisperHelpMessage1": '(To use the curse on me, ask me about the commands... there are more available depending on your permissions [blacklist, public, mistress, owner].Commands are called with {0}, like "{1} respect")',
    "OtherWhisperHelpMessage2": "(To learn all the commands or use it for yourself, check out this repository: https://github.com/ace-1331/ace12401-cursedscript/wiki/Functions )",
    "AllReadOwnerNote": "(A note is attached to her from her owner: {0})",
    "AllNoteSent": "(Note sent to owner(s).)",
    "AllReadOrgasmCount": "(Has had {0} orgasm(s) since the last reset.)",
    "AllInvalidLanguage": '(Invalid language. Currently only "fr", "ru", "ger" and "en" are available. Anyone can contribute to add more!)',
    "AllSetDictionary": "(Dictionary set to {0}.)",
    "PublicPunish": "The curse on %PLAYER% punishes her as requested by {0}",
    "PublicReward": "The curse on %PLAYER% rewards her as requested by {0}",
    "PublicEdge": "The curse on %PLAYER% edges her as requested by {0}",
    "PublicCaptureAction": "%PLAYER% was captured by {0}",
    "PublicCaptureWhisper": "For the next 5 minutes, the wearer is unable to leave a room and can be brought into any given room by beeping them.",
    "PublicCaptureSomeoneElse": "Someone else has captured the wearer in the past 5 minutes, try again later.",
    "PublicCaptureAlready": "You have already captured the wearer.",
    "PublicCaptureDisabled": "Capture mode disabled.",
    "FullBlindfoldOn": "(All blindfolds will completely blind the wearer.)",
    "FullBlindfoldOff": "(Blindfolds will behave normally.)",
    "IsClassicOn": "The curse will act like it did before. (Messages containing transgressions will be sent, but punishments will still be applied.)",
    "IsClassicOff": "The curse will no longer act like it did before. (Messages containing transgressions will NOT be sent.)",
    "ShowTitles": "Currently set titles: {0}",
    "ShowNicknames": "Currently set nicknames: {0}",
    "InvalidItemGroup": "-->Invalid item group. Check the wiki for the list of available groups.",
    "CurseItemInvalidArgs": "(Invalid arguments. Specify the item group and number of hours the curse should stay active.)",
    "FullLengthOn": "Your chat input will now be 5 times bigger. (1000 chars long)",
    "FullLengthOff": "Your chat input will be normal again. (200 chars long)",
    "TipReset": "You can now see all the tips again.",
    "PunishmentColorDisabled": "No longer needed, use savecolors instead.",
    "GeneralInvalidArgs": "Invalid Arguments.",
    "ToggleCommandInvalid": "Invalid command -> specify the command to toggle on/off",
    "RemovedBlacklistCommand": "The {0} command was removed from your blacklist.",
    "LoginHelpOn": "You will no longer see the help message on login.",
    "LoginHelpOff": "You will see the help message on every login again.",
    "forwardallon": "Your curse will forward all whispers to you.",
    "forwardalloff": "Your curse will no longer forward unnecessary whispers.",
    "hidedisplayon": "You will no longer see who has the curse.You will no longer see who has the curse.",
    "hidedisplayoff": "You will now see who has the curse.",
    "restraintvanishon": "Your curse will remove items when the curse on them is lifted.",
    "restraintvanishoff": "Your curse will no longer remove items when the curse on them is lifted.",
    "wardrobev2on": "Enabled enhanced wardrobe. (Changes will be applied on the next reload.) ",
    "wardrobev2off": "Disabled enhanced wardrobe. (Changes will be applied on the next reload.) ",
    "commandsv2on": "Enabled enhanced commands. (Changes will be applied on the next reload.) ",
    "commandsv2off": "Disabled enhanced commands. (Changes will be applied on the next reload.) ",
    "hasCaptureModeon": "You can now be captured by anyone.",
    "hasCaptureModeoff": "You can no longer be captured.",
    "eatcommandon": "Will no longer display whispers containing valid commands.",
    "eatcommandoff": "Will resume displaying whispers containing valid commands.",
    "issilenton": "Your curse will no longer display public messages",
    "issilentoff": "Your curse will resume displaying messages publicly",
    "MissingPresetName": "(Missing argument. [preset name])",
    "NotFoundPreset": "(Preset not found)",
    "ErrorSelfOwn": "(You cannot own yourself.)",
    "RestrainPlayEnabled": "(Your owner disabled this command.)",
    "ErrorClubOwn": "(Cannot remove your official owner.)",
    "OptinCommandToggleOn": "The {0} command was set to enabled",
    "OptinCommandToggleOff": "The {0} command was set to disabled",
    "ToggleOwnerHub": "The curse is now in owner hub mode. No one will be able to interact with your curse.",
    "ToggleCommand": "The {0} command was blocked.",
    "WearerShowStrikes": "You have accumulated {0} strikes.",
    "WearerShowBlacklist": "Your blacklist: #{0}",
    "WearerTalkInvalid": "Invalid arguments. you need to specify the target id and the sentence id like '#name talk miss yes' where miss is the target id and yes is the sentence id.",
    "SelfOwnerAdd": "%PLAYER% now has a new owner ({0})",
    "SelfOwnerRemove": "Removed owner: {0}",
    "ErrorSelfMistress": "(You cannot be your own mistress.)",
    "SelfMistressAdd": "%PLAYER% now has a new mistress ({0})",
    "SelfMistressRemove": "Removed mistress: {0}",
    "QuickbanError": "Action invalid, you are not an admin.",
    "QuickbanSucceed": "Chatroom ban list updated.",
    "InvalidCommandChar": "Invalid command character: {0}",
    "ValidCommandChar": "Your command character was changed to: {0}",
    "WearerNameChange": "Your wearer identifier was changed to: {0}",
    "WearerBlacklistAdd": "Added to blacklist: {0}",
    "WearerBlacklistRemove": "Removed from blacklist: {0}",
    "WearerShowTargets": "Here are your allowed targets --> {0}",
    "WearerShowSentences": "Here are your allowed sentences --> {0}",
    "SelfMsgCheckNotifyGagOOC": "(Tried to use OOC while gagged)",
    "SelfMsgCheckWearerWarnGagOOC": "WARNING: You are not allowed to use OOC in normal chat messages while gagged.",
    "SelfMsgCheckCommandCallError": "(A command call was detected, but unidentified. Check for typos and verify your version if this was intended. This message will be processed normally.)",
    "SelfMsgCheckNotifyForceSay": "(Did not say the sentence willingly.)",
    "SelfMsgCheckWarnForceSay": "WARNING: You were punished for not saying the expected sentence willingly: {0}",
    "SelfMsgCheckNotifyRestrained": "(Tried to speak freely when her speech was restrained.)",
    "SelfMsgCheckWarnRestrained": "WARNING: You tried to speak freely while your speech is being restrained.",
    "SelfMsgCheckNotifyDisrespect": "(Tried to be disrespectful)",
    "SelfMsgCheckWarnDisrespect": "WARNING: Respecting {0} is required.",
    "SelfMsgCheckNotifyWord": "(Used banned words: {0})",
    "SelfMsgCheckWarnWord": "WARNING: Bad word(s) used: {0}",
    "SelfMsgCheckNotifySound": "(Tried to make unallowed sounds)",
    "SelfMsgCheckWarnSound": "WARNING: You made unallowed sounds. (allowed sound: {0})",
    "SelfMsgCheckNotifyContraction": "(Tried to use contractions)",
    "SelfMsgCheckWarnContraction": "WARNING: You are not allowed to use contractions!",
    "SelfMsgCheckNotifyDollLong": "(Tried to use too many words (doll talk infraction))",
    "SelfMsgCheckWarnDollLong": "WARNING: You are not allowed to use more than 5 words! (doll talk infraction)",
    "SelfMsgCheckNotifyDollMany": "(Tried to use fancy words (doll talk infraction))",
    "SelfMsgCheckWarnDollMany": "WARNING: You are not allowed to use words with more than 6 letters! (doll talk infraction)",
    "PunishmentTriggered": "The curse on %PLAYER% punishes her.",
    "ErrorInvalidPunishment": "An invalid punishment restraint was found and removed, this might be caused by a new version of the club if an item was removed or moved to another group.",
    "AppearanceCheckKneel": "The curse on %PLAYER%'s forces her back down to her knees.",
    "AppearanceCheckRestore1": "The curse on %PLAYER% restores her cursed item.",
    "AppearanceCheckRestoreMany": "The curse on %PLAYER% restores her cursed items.",
    "AppearanceCheckRemove1": "The curse on %PLAYER% removes forbidden item.",
    "AppearanceCheckRemoveMany": "The curse on %PLAYER% removes forbidden items.",
    "AppearanceCheckVibe": "The curse on %PLAYER% brings her vibrators back to their required intensity.",
    "MsgCheckActiveMsg": "(The curse is active. Command call id: {0})",
    "MsgCheckErrorNonWhisper": "--> Command cancelled. Please use commands in whispers to prevent spam.",
    "TxtCommand": "Command:",
    "TxtOutput": "Ouputs:",
    "MsgCheckCommandInvalid": "(Invalid command: A command was possibly requested, but no matching command was found. Check for typos , or verify your version number and curse settings. Info about the person who sent the command: Club owner: {0}, Curse owner: {1}, Mistress: {2}, Public access: {3}, Full public access: {4})",
    "MsgCheckAngerMute": "%PLAYER% angers the curse by speaking when she is not allowed to.",
    "MsgCheckFreezeReset": "Freeze timer reset.",
    "MsgCheckFreezeAction": "%PLAYER% freezes as her trigger word is said.",
    "MsgCheckUnfreezeAction": "%PLAYER% unfreezes as her trigger word is said once more.",
    "MistressInvalidProvideOnOff": "(Invalid arguments. Make sure you provided on or off.)",
    "MistressSavedColor": "(Colors saved.)",
    "MistressContractionOn": "(Can no longer use contractions.)",
    "MistressContractionOff": "(Can now use contractions.)",
    "MistressCurseItemInvalidGroup": "(Invalid arguments. Specify the item group.)",
    "MistressChangeStrikeAdd": "%PLAYER% has had {0} strikes added to her strike counter.",
    "MistressChangeStrikeRemove": "%PLAYER% has had {0} strikes subtracted to her strike counter.",
    "MistressDeacPresOn": "-->Curse is deactivated while a mistress is present",
    "MistressDeacPresOff": "-->Curse activated while a mistress is present",
    "MistressDolltalkOn": "The curse on %PLAYER% stops her from speaking in details.",
    "MistressDolltalkOff": "The curse on %PLAYER% allows her to speak normally again.",
    "MistressNormalMuteOn": "The curse on  %PLAYER% forbids her to speak.",
    "MistressNormalMuteOff": "The curse on %PLAYER% allows her to use her words again.",
    "MistressNewBanWord": "New banned word: {0}",
    "MistressRemoveBanWord": "Word allowed {0}",
    "MistressBeggingOn": "(Begging blocked.)",
    "MistressBeggingOff": "(Begging allowed.)",
    "Mistress1stBlock": "(First person blocked.)",
    "Mistress1stAllow": "(First person allowed.)",
    "MistressRename": "New nickname for {0}: {1}",
    "MistressPresetSave": "Preset Saved: {0}",
    "MistressPresetLoadWarning": "(This feature is to load a frequently used set of cursed items easily instead of spamming the same command over and over again. It is not intended as a 'quick tie' function. Please do not use it as such.)",
    "MistressPresetLoadMsg": "The curse on %PLAYER% restores her cursed state ({0})",
    "MistressOldCommandCurseItem": "(Command deprecated in favor of curseitem.)",
    "MistressBasePublicOn": "(Public access enabled.)",
    "MistressBasePublicOff": "(Public access disabled.)",
    "MistressPermaKneelOn": "The curse prevents %PLAYER% from standing up.",
    "MistressPermaKneelOff": "The curse allows %PLAYER% to stand again.",
    "MistressCurseSpeechsOn": "The curse arises on %PLAYER%'s mouth",
    "MistressCurseSpeechsOff": "The curse on %PLAYER%'s mouth vanished.",
    "MistressCurseVibesOn": "The curse arises on %PLAYER%'s vibrating toys.",
    "MistressCurseVibesOff": "The curse on %PLAYER%'s vibrating toys vanished.",
    "MistressCurseVibesInt-1": "%PLAYER%'s vibrators were turned off.",
    "MistressCurseVibesInt0": "%PLAYER%'s vibrators were set to low intensity.",
    "MistressCurseVibesInt1": "%PLAYER%'s vibrators were set to medium intensity.",
    "MistressCurseVibesInt2": "%PLAYER%'s vibrators were set to high intensity.",
    "MistressCurseVibesInt3": "%PLAYER%'s vibrators were set to maximum intensity.",
    "MistressCurseVibesError": "(Invalid command call: please provide the speed [off, low, normal, high, max].)",
    "MistressDeafImmWhisperWarn": "(If you meant to add/remove someone to the list, use the same command and provide a member number.)",
    "MistressDeafImmWhisperList": "The following people's voice will not be deafened: {0}",
    "PrivateShowEnforced": "Enforced list: {0}",
    "PrivateShowMistress": "Mistresses: #{0}",
    "PrivateShowOwner": "Owners: #{0}",
    "PrivateShowSpeechRestriction": "Here are the speech constraints --> Members to respect: {0}, Banned words: {1}, Contractions Ban: {2} , Muted: {3} , Sound: {4}, Entry message: {5}, Restrained speech mode: {6}, Doll talk: {7}, OOC while gagged: {8}, must retype messages: {9}.",
    "OwnerTriggerWordSet": "Wearer's trigger word was set to: {0}",
    "OwnerTriggerWordRemove": "Wearer's trigger word was removed.",
    "OwnerTriggerDurationError": "(Invalid arguments. Please provide the number of minutes the effects of the trigger word should last for.)",
    "OwnerTriggerDurationSet": "Wearer's trigger word effects duration changed to: {0} minutes",
    "OwnerPunRestrainErr1": "(Invalid arguments. Specify the stage (1 to 10) and the restraint group to scan for a current restraint.)",
    "OwnerPunRestrainErr2": "(Invalid arguments. Punishment stage must be a number between 1 and 10.)",
    "OwnerPunRestrainErr3": "(Invalid arguments. Target group does not contain a restraint.)",
    "FullSlowOff": "(Wearer will no longer be slowed permanently.)",
    "FullSlowOn": "(Wearer will now always be slowed.)",
    "forcedRestraintsSettingOff": "(Wearer will no longer be forced keep all restraints when relogging.)",
    "forcedRestraintsSettingOn": "(Wearer will be forced to keep all restraints when relogging.)",
    // --LAST GER TRANSLATION HERE--
    "listedtip0": "If you would like to go through the set up process and have various information about how the curse works, do #name tip where '#name' is your call id. Each time you send this message in chat, it will give you a new tip.",
    "listedtip1": "Whenever you are in doubt, you can do '#name help' where '#name' is your call id to see the list of available functions in your current version. Make sure to always stay up to date and contact ace if there are any issues with your curse. There are more notes in this list: https://github.com/ace-1331/ace12401-cursedscript/wiki/Functions",
    "listedtip2": "When intense mode is turned on, features which are more restrictive or invasive can be used. This usually includes modifying the in-game screens or locking core functions. Be sure to trust your owners if you are to use intense mode.",
    "listedtip3": "You can blacklist someone from interacting with your curse with '#name blacklist 00000' where 00000 is their number. This will not put them in your normal blacklist. The curse already prevents blacklisted and ghosted members from interacting with it",
    "listedtip4": "You can add a mistress to your curse with '#name mistress 00000' where 00000 is their number. Your club owner can prevent you from doing so.",
    "listedtip5": "You can add an owner to your curse with '#name owner 00000' where 00000 is their number. Your club owner can prevent you from doing so. Also, your club owner is added by default and can never be removed.",
    "listedtip6": "You can use '#name savecolors' to save your currently worn colors. The curse will reapply items with the saved colors. Each slot will have its color saved, every call to this command will overwrite every slot.",
    "listedtip7": "You can change your call id with '#name identifier [newidentifier]' where '[newidentifier]' is replaced by what you want it to be. This is useful if you have a very long or a common name.",
    "listedtip8": "There is a deck of card! You can use '#name shuffle' and '#name draw 1' to draw cards. You can also whisper the cards in the case you are a dealer with '#name draw 1 0000' where 0000 is their member number.",
    "listedtip9": "If you would like the speech restrictions rules to send messages containing transgressions, you can use '#name isclassic'. This helps if the main goal is for the curse to keep track of strikes instead of completely blocking bad messages.",
    "listedtip10": "You can make your curse send every messages in whispers to you and your mistresses/owners instead of through actions to the whole room with '#name issilent'. This helps to hide you are using a script or to not disturb others in a busy room",
    "listedtip11": "You can hide the 'C' icon above cursed characters with '#name hidedisplay'",
    "listedtip12": "You can have your restraints automatically removed when the curse is lifted with '#name restraintvanish'. This makes it more convenient in certain scenarios.",
    "listedtip13": "You can have curse commands from others filtered out from your chatlog when received with '#name eatcommands'. This helps with immersion",
    "listedtip14": "There is an improved appearance menu with selection screens, undo, blacklist, enhanced hue picker, and import/export wardrobe. To turn it on, you can use '#name wardrobev2'. This might be bugged in future updates if a lot changes, disable it if it causes problems. https://github.com/ace-1331/ace12401-cursedscript/wiki/Appearance-v2-by-Noname",
    "listedtip15": "The extension menu is dynamic! Always take a look at it to see if you are missing out on a new update. The curse can break with new versions of the club, staying up to date is vital.",
    "listedtip16": "Any item can be cursed by a mistress or an owner. You cannot apply curses yourself. There are several permission levels to give access to various items. Your club owner keeps all the power while allowing you to play with more than one person. For detailed explanation of the permission system: https://github.com/ace-1331/ace12401-cursedscript/wiki/Access-levels-and-curse-activation",
    "listedtip17": "Your own can disable auto-punishments to prevent the curse from applying restraints when it is not intended.",
    "listedtip18": "If you are ever stuck, you can go to the bunny hole in the main all to have your curse reset. You can also go there to turn on intense mode or to get a taste of some curses. The bunny hole also features a UI to view most of your curse info.",
    "listedtip19": "There is a nickname system. The nicknames are only displayed on your side, and have priorities depending from whom it was given. For detailed instructions on nicknames: https://github.com/ace-1331/ace12401-cursedscript/wiki/Nicknames",
    "listedtip20": "There are various reports to have more information about your current settings. Things like speechreport, showmistress, showblacklist, showowners, shownicknames, configreport, and so on.. will give you more details about what you are currently required to do in case you forgot about the active curses",
    "listedtip21": "You can have the curse turn on by itself once you login by activating 'wear permanently' in the extension menu.",
    "listedtip22": "For more information on configurations: https://github.com/ace-1331/ace12401-cursedscript/wiki/Configurations",
    "listedtip23": "Most commands/curses are toggles. This means sending it for the first time will turn the curse on, then sending it again will turn the curse off.",
    "listedtip24": "You must stay on your knees while the cursed collar is activated. One of your owner or mistress must turn it off to remove the curse.",
    "listedtip25": "A cursed item was removed from your character and was subsequently reapplied. To remove a cursed item, the curse must be lifted by one of your mistress or owners.",
    "listedtip26": "An item was applied to a slot that contains an 'empty' curse. The item was removed from your character. To apply an item on this slot, the curse must be lifted by one of your mistress or owners.",
    "listedtip27": "You are currently wearing the cursed vibrator curse, this prevents your vibrators from being on lower intensities. You need one of your owners or mistresses to lift the curse.",
    "listedtip28": "The curse does not support LARP rooms, it will disable itself by default, you should not have to do anything yourself. Please be mindful of the people around you when using the curse.",
    "listedtip29": "The curse will be fair, when you disable it to go in singleplayer, LARP or to do a RP, it will restore your state without punishing you once you reactivate it.",
    "listedtip30": "You are seeing this reminder because your owner activated reminders at a set interval. You need an owner to lift this curse.",
    "listedtip31": "The curse is turned on permanently as requested from the extension menu. This means you will always be wearing the curse when logging in, regardless of your character. You can always disable the curse manually if necessary. Please keep yourself up-to-date as new club versions might not be compatible with your current curse version.",
    "listedtip32": "You received a message from the curse. These messages are similar to whispers as you are the only one seeing them. The name label is used to differentiate messages (Tip, System, Curse, Reminder, etc.)",
    "listedtip33": "The curse just sent a whisper to someone. Most of the time, they are replica of the info you are seeing to keep your mistress/owner informed of changes to your curse. You will not see those whispers. If you would like to see every message for testing purposes, you can use the 'forwardall' command",
    "listedtip34": "Someone who is enforced is someone you must kneel when you first see them in a room. You must also refer to them with appropriate titles like miss/mistress.",
    "listedtip35": "The curse will never apply an item when the zone is blocked by owner locks, the zone is blocked by other items or the item is in your blacklist.",
    "listedtip36": "A maid was not able to free you because one of your owners disabled maids for you. You need one of your owners to disable this curse.",
    "listedtip37": "There is a leashing feature! When enabled, you will be dragged out of chatrooms to be led into another room by any curse owner who triple beeps you. An owner must activate it with '#name leash'",
    "listedtip38": "Your club owner has activated a curse which currently prevents you from having new lovers.",
    "listedtip39": "Your club owner has activated a curse which currently prevents you from collaring new submissives.",
    "listedtip40": "The 'C' icon above a character's head means she is also using the curse.",
    "listedtip41": "You have just passed a threshold from transgressing too many times. Every time a rule is broken, your strike counter goes up depending on the severity of the transgression. There are various stages, the more you transgress, the more you will be bound when being punished by the curse. The counter is reset every week. Your owner can disable this system, or interact with it to add strikes to your counter. Use the help command to see all available commands.",
    "listedtip42": "The restrained speech system is quite complicated. It allows the ability to restrain the wearer to a set of sentences. Better than being completely mute! For detailed explanations, see this page: https://github.com/ace-1331/ace12401-cursedscript/wiki/Speech-restrictions",
    "listedtip43": "Disconnection prevention will make it so the wearer will rejoin a room she was last locked in after disconnecting which makes it impossible to escape by reloading. Be mindful and disable the curse if you end up in someone else's room.",
    "listedtip44": "Meter options will lock your parameters to prevent you from changing its state.",
    "listedtip45": "You can save and load certain presets for curses. This allows you to save different states and get back into action quicker instead of repeating the same commands over and over again. You can choose to load only the cursed zones to curse the new items (loadpresetcurses), or to curse with the preset items (loadpresetcurse). Each preset is saved with a name and loaded with its given name. There is no limit to the amount of curse presets you can have. To view your current presets: listpresets",
    "listedtip46": "Once time is added to the asylum timer, you are left in the room. To be sent to the asylum on the spot, your curse owner needs to do the 'sendasylum' command.",
    "listedtip47": "Cursed vibrators activated with 'vibes' means the intensity is stuck on a given level. By default, it is the maximum, however the intensity can be changed by the vibratoryintensity command.",
    "listedtip48": "Your curse owner(s) can change speech restrictions to make it so the message does not disappear when you transgress with the 'retype' command.",
    "listedtip49": "You are seeing a '?' above someone else because they are running a different version of the curse. This means you or them are out of date. Please verify your curse version.",
    "listedtip50": "There are opt-in curses which are more intense curses than the average, those curses can impact you directly (OOC) or circumvent standard protocols. Please think about why you are turning them on before doing so, if someone is forcing you to, it might not be the best context.You can also disable any command with the same command (togglecommand). The shortcut 'OwnerHub' will make it so it disables commands from everyone while still being able to use the curse yourself for the wardrobe, nicknames, etc.",
    "listedtip51": "There are unlisted commands, can you find them?",
    "listedtip52": "The curse keeps track of your transgressions, anyone can see them when doing '#name transgressions'.",
    "listedtip53": "Punishment restraints can be customized by a curse owner with the 'punishmentrestraint' command.",
    "listedtip54": "When someone says your trigger word, you will be unable to leave the room, interact with anyone or change your close to the set amount of time. Having your trigger word said again will reset the timer. If someone says it again as well as 'unfreeze' in the same sentence, it will remove the trigger effect.",
    "listedtip55": "You and anyone you know who interacts with your curse can have their prefered language set with the command #name language.",
    "listedtip56": "The curse will not work while in a LARP room. It will also restore your proper state you activate it to prevent spam and unfair punishment. BE WARNED, this means it will reapply all cursed items on you if you had some which you removed. This helps to do singleplayer stuff without being stuck.",
    "listedtipRoomInfo": " Click the button again for another tip.",
    "listedtipChatInfo": " Send the command again to see another tip.",
    "listedtipNoMore": "No more tips available for now. You might want to suggest new ones! You can also do '#name tip reset' to go through all tips again",
    // --LAST RU TRANSLATION HERE--
    "AsylumLockdownOff": "%PLAYER% will no longer keep her restraints in her asylum bedroom.",
    "AsylumLockdownOn": "%PLAYER% will now keep her restraints in her asylum bedroom.",
    "AsylumBedroomSent": "You were sent to your asylum cell by an owner, you",
    "AsylumBedroomSentAction": "%PLAYER% was sent to her asylum cell.",
    "AsylumMustBeInAsylum": "Must be in the asylum for this to work.",
    "AsylumLockdownActive": "Asylum lockdown active!",
    "MistresshasNoResistOff": "%PLAYER%'s curse allows her to resist orgasms again.",
    "MistresshasNoResistOn": "%PLAYER%'s curse forbids her to resist orgasms.",
};