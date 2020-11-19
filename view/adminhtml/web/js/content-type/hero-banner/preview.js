define([
    'Magento_PageBuilder/js/content-type/preview',
    'Magento_PageBuilder/js/events',
    'Magento_PageBuilder/js/uploader'
], function (PreviewBase, events, Uploader) {
    'use strict';

    /**
     * Hero Banner preview component
     */
    return class extends PreviewBase {
        /**
         * Get image uploader.
         * @return {*}
         */
        getUploader() {
            const initialImageValue = this.contentType.dataStore.get(
                this.config.additional_data.uploaderConfig.dataScope, ''
            );

            return new Uploader(
                'imageuploader_' + this.contentType.id,
                this.config.additional_data.uploaderConfig,
                this.contentType.id,
                this.contentType.dataStore,
                initialImageValue
            );
        }
    };
});
