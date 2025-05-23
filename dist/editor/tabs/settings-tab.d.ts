import { LitElement, TemplateResult } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { UltraVehicleCardConfig } from '../../types';
import '../../components/entity-picker';
import '../../components/color-picker';
import '../..//components/gradient-editor';
import './action-images-tab';
export declare class SettingsTab extends LitElement {
    hass: HomeAssistant;
    private _internalConfig;
    set config(value: UltraVehicleCardConfig);
    get config(): UltraVehicleCardConfig;
    private get _config();
    private _vehicleCropExpanded;
    private _activeSubTab;
    private _formatFieldName;
    private _truncatePath;
    private _valueChanged;
    private _getImageSchema;
    private _dispatchFileUpload;
    private _resetTitleSize;
    private _createDefaultCropSettings;
    private _renderCropSliders;
    private _updateImageCrop;
    private _renderGeneralTab;
    protected render(): TemplateResult;
    private _handleConfigChangedFromActionImages;
    private _handleFileUploadEvent;
    static styles: import("lit").CSSResult;
}
