(function (_) {

    /**
     * Action importing a document
     * @param {GExport} export_
     * @class GExportAction
     * @extends GAction
     * @constructor
     */
    function GExportAction(export_) {
        this._export = export_;
    };
    IFObject.inherit(GExportAction, GAction);

    GExportAction.ID = 'file.export';
    GExportAction.TITLE = new IFLocale.Key(GExportAction, "title");

    /**
     * @override
     */
    GExportAction.prototype.getId = function () {
        return GExportAction.ID + '.' + this._export.getExtension();
    };

    /**
     * @override
     */
    GExportAction.prototype.getTitle = function () {
        return ifLocale.get(GExportAction.TITLE).replace('%name%', ifLocale.get(this._export.getName()));
    };

    /**
     * @override
     */
    GExportAction.prototype.getCategory = function () {
        return GApplication.CATEGORY_FILE_EXPORT;
    };

    /**
     * @override
     */
    GExportAction.prototype.isEnabled = function () {
        return !!gApp.getActiveDocument();
    };

    /**
     * @override
     */
    GExportAction.prototype.execute = function () {
        // TODO
    };

    /** @override */
    GExportAction.prototype.toString = function () {
        return "[Object GExportAction]";
    };

    _.GExportAction = GExportAction;
})(this);