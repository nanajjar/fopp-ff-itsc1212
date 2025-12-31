
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-clens10_1_3";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "nested2 = [{'a': 1, 'b': 3}, {'a': 5, 'c': 90, 5: 50}, {'b': 3, 'c': \"yes\"}]\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 1, "event": "return", "func_name": "<module>", "globals": {"nested2": ["REF", 1]}, "ordered_globals": ["nested2"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["DICT", ["a", 1], ["b", 3]], "3": ["DICT", ["a", 5], ["c", 90], [5, 50]], "4": ["DICT", ["b", 3], ["c", "yes"]]}, "stdout": ""}], "startingInstruction": 0};
})();