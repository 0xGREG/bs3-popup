var _Popups = {}

var PopupWrapper = '<div class="modal" tabindex="-1" role="dialog" id="@id"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">@title</h5></div><div class="modal-body">@body</div><div class="modal-footer">@footer</div></div></div></div>'
var PopupButtonOk = '<button type="button" class="btn btn-primary" data-dismiss="modal" id="@id">@label</button>'
var PopupButtonCancel = '<button type="button" class="btn btn-secondary" data-dismiss="modal" id="@id">@label</button>'

function popup(options) {
    var uniq = Math.random().toString().replace(".", "-")

    if (typeof options === "undefined")
        options = {}

    var id = "popupjs-" + uniq

    var type = options.type || "alert"
    var okLabel = options.okLabel || "Ok"
    var cancelLabel = options.cancelLabel || "Cancel"

    var okId = "popupok-" + uniq
    var cancelId = "popupcnc-" + uniq

    var title = options.title || "Alert"
    var body = options.body || "options.body not defined"
    var footer = PopupButtonOk.replace("@label", okLabel).replace("@id", okId)

    if (type == "prompt")
        footer += PopupButtonCancel
            .replace("@label", cancelLabel)
            .replace("@id", cancelId)


    $("body").append(PopupWrapper
        .replace("@id", id)
        .replace("@title", title)
        .replace("@body", body)
        .replace("@footer", footer))

    if (typeof options.ok !== "undefined")
        $("#" + okId).click(options.ok)

    if (typeof options.cancel !== "undefined")
        $("#" + cancelId).click(options.cancel)

    $("#" + id).modal()
}