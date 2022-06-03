"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolve = void 0;
const continuation_local_storage_1 = require("continuation-local-storage");
const connectionManager_1 = require("../database/connectionManager");
/**
 * Aqui crearemos un solucionador de conexiones que determinara que conexion usar a lo largo de la solicitud
 **/
// Creo un espacio de nombre para la aplicacion
let nameSpace = (0, continuation_local_storage_1.createNamespace)('unique context');
/**
 * Obtengo la instancia de conexión para el slug del inquilino solicitado y lo configuramos
 * en el contexto actual
 */
function resolve(req, res, next) {
    const slug = req.query.slug;
    //console.log('slug', req.query);
    if (!slug) {
        res.json({ message: `Proporcione el slug del inquilino para conectarse.` });
        return;
    }
    // Ejecutamos la aplicación en el espacio de nombres definido. Contextualizará todas las llamadas a funciones subyacentes.
    nameSpace.run(() => {
        nameSpace.set('connection', (0, connectionManager_1.getConnectionBySlug)(slug));
        next();
    });
}
exports.resolve = resolve;
/**
 * Almacenamiento local de continuación
 * El almacenamiento local de continuación funciona como el almacenamiento local de subprocesos en la programación de subprocesos,
 * pero se basa en cadenas de devoluciones de llamada al estilo de nodo en lugar de subprocesos.
 * La convención estándar de Node de funciones que llaman a funciones es muy similar a algo llamado "estilo de paso de continuación"
 * en la programación funcional, y el nombre proviene de la forma en que este módulo le permite establecer y obtener valores que están dentro
 * del alcance de la vida útil de estas cadenas de llamadas de función.
 */
//# sourceMappingURL=connectionResolver.js.map