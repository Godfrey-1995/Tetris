let Loader =  { 
    LoadRes: function(path:string, complete_callback: Function) {
        cc.loader.loadRes(path, function (err, prefab) {
            if (err) {
                cc.error('loadRes failed ' + err);
                return;
            }

            complete_callback && complete_callback(prefab);
        }.bind(this));
    }
}

export { Loader };