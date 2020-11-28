import { HttpStatusCode } from './httpStatusCode';

function statusMessage(status: HttpStatusCode) {
    switch (status) {
        case HttpStatusCode.BAD_REQUEST:
            return 'Bad Request';
        case HttpStatusCode.UNAUTHORIZED:
            return 'Unauthorized';
        case HttpStatusCode.FORBIDDEN:
            return 'Forbidden';
        case HttpStatusCode.NOT_FOUND:
            return 'Not Found';
        case HttpStatusCode.UNSUPPORTED_ACTION:
            return 'Unsupported Action';
        case HttpStatusCode.VALIDATION_FAILED:
            return 'Validation Failed';
        case HttpStatusCode.SERVER_ERROR:
            return 'Internal Server Error';
        case HttpStatusCode.CREATED:
            return 'Created';
    }
}

function jsonResponse(res, body, options) {
    options = options || {};
    options.status = options.status || HttpStatusCode.OK;
    res.status(options.status).json(body || null);
}

const ResponseApi = {
    ok: function (req, res, data) {
        jsonResponse(res, data, {
            status: HttpStatusCode.OK
        });
    },

    unauthorized: function (req, res) {
        let body = {
            message: statusMessage(HttpStatusCode.UNAUTHORIZED)
        };

        jsonResponse(res, body, {
            status: HttpStatusCode.UNAUTHORIZED
        });
    }
}

export { ResponseApi }