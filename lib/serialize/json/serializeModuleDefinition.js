
/*
 * Copyright (C) 2015 ICOS Group, Newcastle University.  All rights reserved.
 * Contact:  James Alastair McLaughlin <j.a.mclaughlin@ncl.ac.uk>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *  
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

"use strict";

var extend = require('extend'),
    serializeIdentified = require('./serializeIdentified'),
    serializeFunctionalComponent = require('./serializeFunctionalComponent'),
    serializeInteraction = require('./serializeInteraction');

module.exports = function serializeModuleDefinition(sbolDocument, moduleDefinition) {

    var out = {};

    if(moduleDefinition.roles.length > 0) {
        out.roles = moduleDefinition.roles.map(function(role) {
            return role.toString();
        });
    }

    if(moduleDefinition.functionalComponents.length > 0) {
        out.functionalComponents = moduleDefinition.functionalComponents.map(function(functionalComponent) {
            return serializeFunctionalComponent(sbolDocument, functionalComponent);
        });
    }

    if(moduleDefinition.interactions.length > 0) {
        out.interactions = moduleDefinition.interactions.map(function(interaction) {
            return serializeInteraction(sbolDocument, interaction);
        });
    }

    if(moduleDefinition.models.length > 0) {
        out.models = moduleDefinition.models.map(function(model) {
            return model.uri.toString();
        });
    }

    return extend(serializeIdentified(sbolDocument, moduleDefinition), out);
}
