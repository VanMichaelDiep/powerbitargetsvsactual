import DataViewObjects = powerbi.extensibility.utils.dataview.DataViewObjects;
import textMeasurementService = powerbi.extensibility.utils.formatting.textMeasurementService;
import ValueFormatter = powerbi.extensibility.utils.formatting.valueFormatter;
import TextProperties = powerbi.extensibility.utils.formatting.TextProperties;
import IValueFormatter = powerbi.extensibility.utils.formatting.IValueFormatter;
import NumberFormat = powerbi.extensibility.utils.formatting.numberFormat;

module powerbi.extensibility.visual {
    import ISelectionId = powerbi.visuals.ISelectionId

    interface ViewModel {
        dataPoints: DataPoint[],
        maxValue: number,
        highlights: boolean,
        hasCategories: boolean,
        legendDataPoints: LegendDataPoint[],
        legendDataPointsWithCustomIcons: LegendCustomIcon[];
        settings: VisualSettings,
    };

    interface TextProperties {
        text?: string,
        fontFamily: string,
        fontSize: string,
        fontWeight?: string,
        fontStyle?: string,
        whiteSpace?: string,
    };

    interface DataPoint {
        category: string,
        actuals: PrimitiveValue,
        actualsHighlighted: PrimitiveValue,
        targets: PrimitiveValue,
        targetsHighlighted: PrimitiveValue,
        actualVsTarget: string,
        actualVsTargetHighlighted: string,
        actualsIdentity: ISelectionId,
        targetsIdentity: ISelectionId,
        tooltip: any;
    };

    interface VisualSettings {
        yAxis: {
            show: boolean,
            textColor: any,
            fontSize: number,
            maxWidth: number,
        };
        xAxis: {
            show: boolean,
            textColor: any,
            fontSize: number,
        };
        barSettings: {
            actualsColor: any,
            targetsColor: any,
            targetsLineStroke: number,
            setMinBarHeight: boolean,
            height: number,
        };
        dataLabels: {
            show: boolean,
            fontSize: number,
            actualsTextColor: any,
            targetsTextColor: any,
            targetsAlignBarLabels: boolean,
        };
        units: {
            show: boolean,
            decimalPlaces: number,
        };
        legend: {
            show: boolean,
            position: string,
            showTitle: boolean,
            titleText: string,
            labelColor: Fill,
            fontSize: number,
        };
    }

    function defaultSettings(): VisualSettings {
        return {
            yAxis: {
                show: true,
                textColor: { solid: { color: "#777777" } },
                fontSize: 16,
                maxWidth: 50,
            },
            xAxis: {
                show: false,
                textColor: { solid: { color: "#777777" } },
                fontSize: 12,
            },
            barSettings: {
                actualsColor: { solid: { color: "#01B8AA" } },
                targetsColor: { solid: { color: "#FD625E" } },
                targetsLineStroke: 2,
                setMinBarHeight: false,
                height: 30,
            },
            dataLabels: {
                show: true,
                fontSize: 11,
                actualsTextColor: { solid: { color: "#FFFFFF" } },
                targetsTextColor: { solid: { color: "#FD625E" } },
                targetsAlignBarLabels: false,
            },
            units: {
                show: true,
                decimalPlaces: 0,
            },
            legend: {
                show: false,
                position: 'Top',
                showTitle: false,
                titleText: '',
                labelColor: { solid: { color: "#666" } },
                fontSize: 8,
            },
        };
    }

    function visualTransform(options: VisualUpdateOptions, host: IVisualHost): ViewModel {
        let dataViews = options.dataViews;
        let hasDataViews = (dataViews && dataViews[0]);
        let hasCategoricalData = (hasDataViews && dataViews[0].categorical && dataViews[0].categorical.values);
        let hasSettings = (hasDataViews && dataViews[0].metadata && dataViews[0].metadata.objects);
        let dataPoints: DataPoint[] = [];
        let maxValue = 0;
        let highlights = false;
        let hasCategories = false;
        let legendDataPoints: LegendDataPoint[] = [];
        let legendDataPointsWithCustomIcons: LegendCustomIcon[] = [];

        let settings: VisualSettings = defaultSettings();
        if (hasSettings) {
            let metadata = dataViews[0].metadata;
            let objects = metadata.objects;
            settings = {
                yAxis: {
                    show: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "show" }, settings.yAxis.show),
                    textColor: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "textColor" }, settings.yAxis.textColor),
                    fontSize: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "fontSize" }, settings.yAxis.fontSize),
                    maxWidth: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "maxWidth" }, settings.yAxis.maxWidth),
                },
                xAxis: {
                    show: DataViewObjects.getValue(objects, { objectName: "xAxis", propertyName: "show" }, settings.xAxis.show),
                    textColor: DataViewObjects.getValue(objects, { objectName: "xAxis", propertyName: "textColor" }, settings.xAxis.textColor),
                    fontSize: DataViewObjects.getValue(objects, { objectName: "xAxis", propertyName: "fontSize" }, settings.xAxis.fontSize),
                },
                barSettings: {
                    actualsColor: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "actualsColor" }, settings.barSettings.actualsColor),
                    targetsColor: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "targetsColor" }, settings.barSettings.targetsColor),
                    targetsLineStroke: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "targetsLineStroke" }, settings.barSettings.targetsLineStroke),
                    setMinBarHeight: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "setMinBarHeight" }, settings.barSettings.setMinBarHeight),
                    height: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "height" }, settings.barSettings.height),
                },
                dataLabels: {
                    show: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "show" }, settings.dataLabels.show),
                    fontSize: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "fontSize" }, settings.dataLabels.fontSize),
                    actualsTextColor: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "actualsTextColor" }, settings.dataLabels.actualsTextColor),
                    targetsTextColor: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "targetsTextColor" }, settings.dataLabels.targetsTextColor),
                    targetsAlignBarLabels: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "targetsAlignBarLabels" }, settings.dataLabels.targetsAlignBarLabels),
                },
                units: {
                    show: DataViewObjects.getValue(objects, { objectName: "units", propertyName: "show" }, settings.units.show),
                    decimalPlaces: DataViewObjects.getValue(objects, { objectName: "units", propertyName: "decimalPlaces" }, settings.units.decimalPlaces),
                },
                legend: {
                    show: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "show" }, settings.legend.show),
                    position: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "position" }, settings.legend.position),
                    showTitle: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "showTitle" }, settings.legend.showTitle),
                    titleText: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "titleText" }, settings.legend.titleText),
                    labelColor: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "labelColor" }, settings.legend.labelColor),
                    fontSize: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "fontSize" }, settings.legend.fontSize),
                },
            }
        }

        if (hasCategoricalData) {
            let categorical = dataViews[0].categorical;
            let categories = categorical.categories ? categorical.categories[categorical.categories.length - 1] : null;
            let categoriesValues = categories ? categories.values : [''];

            for (let i = 0; i < categoriesValues.length; i++) {
                let dataPoint: DataPoint = {
                    category: null,
                    actuals: 0,
                    actualsHighlighted: 0,
                    targets: 0,
                    targetsHighlighted: 0,
                    actualVsTarget: "",
                    actualVsTargetHighlighted: "",
                    actualsIdentity: null,
                    targetsIdentity: null,
                    tooltip: [],
                };

                for (let k = 0; k < categorical.values.length; k++) {
                    let dataValue = categorical.values[k];
                    let value: any = dataValue.values[i];
                    let addToLegend = (i == 0);
                    let displayName = dataValue.source.displayName;

                    if (categories) {
                        dataPoint.category = String(categoriesValues[i]);
                        hasCategories = true;
                    } else {
                        dataPoint.category = displayName;
                    }

                    if (dataValue.source.roles['actuals']) {
                        dataPoint.actuals = value ? value : 0;
                        dataPoint.actualsIdentity = host.createSelectionIdBuilder()
                            .withCategory(categories, i)
                            .withMeasure(dataValue.source.queryName)
                            .createSelectionId();
                        let color: any = settings.barSettings.actualsColor.solid.color

                        if (addToLegend) {
                            legendDataPoints.push({
                                label: displayName,
                                color: color,
                                icon: LegendIcon.Circle,
                                identity: dataPoint.actualsIdentity,
                                selected: false
                            });
                        }

                        dataPoint.tooltip.push(<VisualTooltipDataItem>{
                            displayName: displayName,
                            value: (dataPoint.actuals == undefined ? '(Blank)' : dataPoint.actuals)
                        });

                        if (dataValue.highlights) {
                            dataPoint.actualsHighlighted = <any>dataValue.highlights[i];
                            highlights = true;

                            dataPoint.tooltip.push(<VisualTooltipDataItem>{
                                displayName: displayName + ' Highlighted',
                                value: (dataPoint.actualsHighlighted == undefined ? '(Blank)' : dataPoint.actualsHighlighted)
                            });
                        }
                    }

                    if (dataValue.source.roles['targets']) {
                        dataPoint.targets = value ? value : 0;
                        dataPoint.targetsIdentity = host.createSelectionIdBuilder()
                            .withCategory(categories, i)
                            .withMeasure(dataValue.source.queryName)
                            .createSelectionId();
                        let color: any = settings.barSettings.targetsColor.solid.color

                        if (addToLegend) {
                            legendDataPoints.push({
                                label: displayName,
                                color: color,
                                icon: LegendIcon.Box,
                                identity: dataPoint.targetsIdentity,
                                selected: false
                            });
                            legendDataPointsWithCustomIcons.push({
                                icon: 'line',
                                color: color,
                                identity: dataPoint.targetsIdentity
                            });
                        }

                        dataPoint.tooltip.push(<VisualTooltipDataItem>{
                            displayName: displayName,
                            value: (dataPoint.targets == undefined ? '(Blank)' : dataPoint.targets)
                        });

                        if (dataValue.highlights) {
                            dataPoint.targetsHighlighted = <any>dataValue.highlights[i];
                            highlights = true;

                            dataPoint.tooltip.push(<VisualTooltipDataItem>{
                                displayName: displayName + ' Highlighted',
                                value: (dataPoint.targetsHighlighted == undefined ? '(Blank)' : dataPoint.targetsHighlighted)
                            });
                        }
                    }

                    if (dataValue.source.roles['tooltips']) {
                        if (value !== null) {
                            dataPoint.tooltip.push(<VisualTooltipDataItem>{
                                displayName: displayName,
                                value: (value == undefined ? '(Blank)' : value)
                            });
                        }
                    }
                }

                dataPoints.push({
                    category: dataPoint.category,
                    actuals: dataPoint.actuals,
                    actualsHighlighted: dataPoint.actualsHighlighted,
                    targets: dataPoint.targets,
                    targetsHighlighted: dataPoint.targetsHighlighted,
                    actualVsTarget: dataPoint.targets > 0 ? String(" (" + Math.floor(<number>dataPoint.actuals / <number>dataPoint.targets * 100) + "%)") : "",
                    actualVsTargetHighlighted: dataPoint.targetsHighlighted > 0 ? String(" (" + Math.floor(<number>dataPoint.actualsHighlighted / <number>dataPoint.targetsHighlighted * 100) + "%)") : "",
                    actualsIdentity: dataPoint.actualsIdentity,
                    targetsIdentity: dataPoint.targetsIdentity,
                    tooltip: dataPoint.tooltip,
                });
            }
        }
        maxValue = d3.max(dataPoints, x => Math.max(<number>x.targets, <number>x.actuals/* , <number>x.actuals2 */));

        return {
            dataPoints: dataPoints,
            maxValue: maxValue,
            highlights: highlights,
            hasCategories: hasCategories,
            legendDataPoints: legendDataPoints,
            legendDataPointsWithCustomIcons: legendDataPointsWithCustomIcons,
            settings: settings,
        }
    }

    export class Visual implements IVisual {
        static Config = {
            solidOpacity: 1.0,
            transparentOpacity: 0.25,
            barPadding: 0.3,
            yAxisPadding: 30,
            minYAxisPadding: 10,
            xAxisPadding: 30,
            maxHeightScale: 3,
            xdMin: 30,
            outerPadding: 0.1,
            outerPaddingScale: 0.5,
            xPadding: 0.3,
            fontScaleFactor: 2.5,
            minFontSize: 8.5,
            maxFontSize: 30,
            fontFamily: "Segoe UI",
        }
        private host: IVisualHost;
        private selectionManager: ISelectionManager;
        private tooltipServiceWrapper: ITooltipServiceWrapper;
        private svg: d3.Selection<SVGElement>;
        private barContainer: d3.Selection<SVGElement>;
        private yAxisGroup: d3.Selection<SVGElement>;
        private xAxisGroup: d3.Selection<SVGElement>;
        private divContainer: d3.Selection<SVGElement>;
        private VisualSettings: VisualSettings;
        private legend: ILegend;

        constructor(options: VisualConstructorOptions) {
            this.host = options.host;
            this.selectionManager = options.host.createSelectionManager();
            this.tooltipServiceWrapper = createTooltipServiceWrapper(options.host.tooltipService, options.element);
            this.legend = LegendModule.createLegend(options.element, false, null, true, LegendPosition.Top);
            this.svg = d3.select(options.element)
                .append('div')
                .classed('divContainer', true)
                .append("svg")
                .classed("Visual", true);
            this.barContainer = this.svg
                .append("g")
                .classed("barContainer", true);
            this.yAxisGroup = this.svg
                .append("g")
                .classed("yAxis", true);
            this.xAxisGroup = this.svg
                .append("g")
                .classed("xAxis", true);
            this.divContainer = d3.select('.divContainer');
        }

        public update(options: VisualUpdateOptions) {

            let viewModel = visualTransform(options, this.host);

            let settings = this.VisualSettings = viewModel.settings;

            let margin = { top: 0, left: 0, bottom: 0, right: 0 };

            if (settings.legend.show && viewModel.legendDataPoints.length > 0) {
                this.legend.changeOrientation(<any>LegendPosition[settings.legend.position]);
                this.legend.drawLegend(<LegendData>{
                    title: settings.legend.titleText,
                    dataPoints: viewModel.legendDataPoints,
                    labelColor: settings.legend.labelColor.solid.color,
                    fontSize: settings.legend.fontSize
                }, options.viewport);
                replaceLegendIconsWithCustom(viewModel.legendDataPointsWithCustomIcons);
                appendLegendMargins(this.legend, margin);
            } else {
                this.legend.drawLegend({ dataPoints: [] }, options.viewport);
            }

            let width = options.viewport.width - margin.left - margin.right;
            let height = options.viewport.height;

            let yAxisPadding = settings.dataLabels.show ? Visual.Config.yAxisPadding : Visual.Config.minYAxisPadding;
            let xAxisPadding = settings.xAxis.show ? Visual.Config.xAxisPadding : 0;

            let xdMax = height / Visual.Config.maxHeightScale;
            let xdMin = Visual.Config.xdMin;
            if (settings.barSettings.setMinBarHeight) {
                xdMin = settings.barSettings.height;
            } else xdMin = Visual.Config.xdMin;

            let outerPadding = Visual.Config.outerPadding;
            let calcX = height / (2 * Visual.Config.outerPaddingScale - Visual.Config.xPadding + viewModel.dataPoints.length);
            let calcHeight = (-2 * outerPadding - Visual.Config.xPadding + viewModel.dataPoints.length) * xdMin;

            if (calcX > xdMax) {
                if (xdMax >= xdMin) {
                    let tempouterPadding = (height - (-Visual.Config.xPadding + viewModel.dataPoints.length) * xdMax) / (2 * xdMax);
                    if (tempouterPadding > 0) outerPadding = tempouterPadding
                }
                else {
                    let tempOuterPadding = (height - (-Visual.Config.xPadding + viewModel.dataPoints.length) * xdMin) / (2 * xdMin);
                    if (tempOuterPadding > 0) outerPadding = tempOuterPadding
                }
            }
            else {
                if (calcX < xdMin && calcHeight > height) {
                    height = calcHeight;
                }
            }

            let h = options.viewport.height - margin.top - margin.bottom;
            let w = options.viewport.width - margin.left - margin.right;

            this.divContainer.attr({
                style: 'width:' + w + 'px;height:' + h + 'px;overflow-y:auto;overflow-x:hidden;'
            });

            this.divContainer.style({
                'position': 'absolute',
                'top': margin.top + 'px',
                'left': margin.left + 'px',
                'right': margin.right + 'px',
                'bottom': margin.bottom + 'px',
            });

            this.svg.attr({
                width: width,
                height: height,
            });

            let y = d3.scale.ordinal()
                .domain(viewModel.dataPoints.map(d => d.category))
                .rangeBands([xAxisPadding, height], Visual.Config.barPadding, outerPadding);

            let labelsFontSize = settings.dataLabels.show ? settings.dataLabels.fontSize : y.rangeBand() / Visual.Config.fontScaleFactor;
            if (labelsFontSize < Visual.Config.minFontSize && !settings.dataLabels.show)
                labelsFontSize = Visual.Config.minFontSize;
            if (labelsFontSize > Visual.Config.maxFontSize && !settings.dataLabels.show)
                labelsFontSize = Visual.Config.maxFontSize;

            let indexForDataMax = getIndexForDataMax(viewModel.dataPoints);
            let targetsString = String(viewModel.dataPoints[indexForDataMax].targets + viewModel.dataPoints[indexForDataMax].actualVsTarget);

            let labelsTextProperties: TextProperties = {
                text: targetsString,
                fontFamily: Visual.Config.fontFamily,
                fontSize: labelsFontSize + 'px',
            };

            let categoryLongest = d3.max(viewModel.dataPoints,
                d => 5 + textMeasurementService.measureSvgTextWidth(
                    {
                        text: String(d.category),
                        fontFamily: Visual.Config.fontFamily,
                        fontSize: settings.yAxis.fontSize + 'px'
                    })
            );
            let maxYAxisPadding = settings.yAxis.show ? settings.yAxis.maxWidth : 0.5;
            let yAxisTickSize = Math.min(w * maxYAxisPadding / 100, categoryLongest);

            let dataLabelsPadding = textMeasurementService.measureSvgTextWidth(labelsTextProperties);

            let x = d3.scale.linear()
                .domain([0, viewModel.maxValue])
                .range([yAxisTickSize, width - dataLabelsPadding - yAxisPadding]);

            let yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .tickSize(0)
                .tickPadding(5);

            let wrap = function () {
                let self = d3.select(this);
                let node: SVGTSpanElement = <SVGTSpanElement>self.node();
                let textLength = node.getComputedTextLength();
                let text = self.text();
                while (textLength > (yAxisTickSize) && text.length > 0) {
                    text = text.slice(1);
                    self.text('...' + text);
                    textLength = node.getComputedTextLength();
                }
            };

            this.yAxisGroup
                .call(yAxis)
                .attr({
                    transform: "translate(" + yAxisTickSize + ", 0)",
                })
                .style({
                    fill: settings.yAxis.textColor.solid.color,
                })
                .selectAll("text")
                .style({
                    "font-size": settings.yAxis.fontSize,
                })
                .each(wrap);

            let xAxis = d3.svg.axis()
                .scale(x)
                .orient("top")
                .tickSize(5);

            this.xAxisGroup
                .call(xAxis)
                .attr({
                    transform: "translate(0, " + (xAxisPadding) + ")",
                })
                .style({
                    fill: settings.xAxis.textColor.solid.color,
                })
                .selectAll("text")
                .style({
                    "text-anchor": "left",
                    "font-size": settings.xAxis.fontSize,
                });

            let bars = this.barContainer.selectAll("g.bar").data(viewModel.dataPoints);

            bars
                .enter()
                .append("g")
                .classed("bar", true);

            bars
                .attr({
                    x: yAxisTickSize,
                    y: d => y(d.category),
                    height: y.rangeBand(),
                    width: d => x(<number>d.targets) - yAxisTickSize,
                });

            let actualsRects = bars.selectAll("rect.actualsBar").data(d => [d]);
            let actualsLabelsText = bars.selectAll('text.actualsLabelsText').data(d => [d]);
            let actualsRectsHi = bars.selectAll("rect.actualsBarHi").data(d => [d]);
            let actualsLabelsTextHi = bars.selectAll('text.actualsLabelsTextHi').data(d => [d]);
            actualsRects
                .enter()
                .append("rect")
                .classed("actualsBar", true);
            actualsRects
                .attr({
                    x: yAxisTickSize,
                    y: d => y(d.category),
                    height: y.rangeBand(),
                    width: d => x(<number>d.actuals) - yAxisTickSize,
                    "fill-opacity": viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity,
                })
                .style({
                    fill: settings.barSettings.actualsColor.solid.color,
                });

            if (settings.dataLabels.show) {
                actualsLabelsText
                    .enter()
                    .append('text')
                    .classed("actualsLabelsText", true);
                actualsLabelsText
                    .attr({
                        x: d => x(<number>d.actuals / 2),
                        y: d => getTextPositionY(d.category, labelsTextProperties),
                        height: y.rangeBand(),
                        'font-size': labelsFontSize,
                        fill: settings.dataLabels.actualsTextColor.solid.color,
                        'fill-opacity': viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity,
                    })
                    .text(d => String(d.actuals ? d.actuals : ""))
                    .style({
                        "text-anchor": "middle",
                    });
            }
            else {
                actualsLabelsText.remove();
            };

            if (viewModel.highlights) {
                actualsRectsHi
                    .enter()
                    .append("rect")
                    .classed("actualsBarHi", true);
                actualsRectsHi
                    .attr({
                        x: yAxisTickSize,
                        y: d => y(d.category),
                        height: y.rangeBand(),
                        width: d => x(<number>d.actualsHighlighted) - yAxisTickSize,
                    })
                    .style({
                        fill: settings.barSettings.actualsColor.solid.color,
                    });
                if (settings.dataLabels.show) {
                    actualsLabelsTextHi
                        .enter()
                        .append('text');
                    actualsLabelsTextHi
                        .attr({
                            x: d => x(<number>d.actualsHighlighted / 2),
                            y: d => getTextPositionY(d.category, labelsTextProperties),
                            height: y.rangeBand(),
                            'font-size': labelsFontSize,
                            fill: settings.dataLabels.actualsTextColor.solid.color,
                        })
                        .classed('actualsLabelsTextHi', true)
                        .text(d => String(d.actualsHighlighted ? d.actualsHighlighted : ""))
                        .style({
                            "text-anchor": "middle",
                        });
                }
                else {
                    actualsLabelsTextHi.remove();
                };
            }
            else {
                actualsRectsHi.remove();
                actualsLabelsTextHi.remove();
            };

            let targetRects = bars.selectAll("rect.targetBar").data(d => [d]);
            targetRects
                .enter()
                .append("rect")
                .classed("targetBar", true);
            targetRects
                .attr({
                    x: yAxisTickSize,
                    y: d => y(d.category),
                    height: y.rangeBand(),
                    width: d => x(<number>d.targets) - yAxisTickSize,
                    fill: "none",
                    "stroke-width": settings.barSettings.targetsLineStroke,
                    "stroke": settings.barSettings.targetsColor.solid.color,
                    "stroke-opacity": viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity,
                });

            let targetLabelsText = bars.selectAll('text.targetLabelsText').data(d => [d]);
            if (settings.dataLabels.show) {
                targetLabelsText
                    .enter()
                    .append('text')
                    .classed('targetLabelsText', true);
                targetLabelsText
                    .attr({
                        x: d => {
                            return settings.dataLabels.targetsAlignBarLabels ? getTextPositionX(viewModel.maxValue, null) : getTextPositionX(Math.max(<number>d.targets, <number>d.actuals/* +<number>d.actuals2 */), null)
                        },
                        y: d => getTextPositionY(d.category, labelsTextProperties),
                        height: y.rangeBand(),
                        'font-size': labelsFontSize,
                        fill: settings.dataLabels.targetsTextColor.solid.color,
                        'fill-opacity': d => d.targets > 0 ? viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity : 0,
                    })
                    .text(d => String((d.targets ? d.targets : "") + <string>d.actualVsTarget));
            }
            else {
                targetLabelsText.remove();
            };

            let targetRectsHi = bars.selectAll("rect.targetBarHi").data(d => [d]);
            let targetLabelsRectHi = bars.selectAll("rect.targetLabelsRectHi").data(d => [d]);
            let targetLabelsTextHi = bars.selectAll('text.targetLabelsTextHi').data(d => [d]);
            if (viewModel.highlights) {
                targetRectsHi
                    .enter()
                    .append("rect")
                    .classed("targetBarHi", true);
                targetRectsHi
                    .attr({
                        x: yAxisTickSize,
                        y: d => y(d.category),
                        height: y.rangeBand(),
                        width: d => x(<number>d.targetsHighlighted) - yAxisTickSize,
                        fill: "none",
                        "stroke-width": settings.barSettings.targetsLineStroke,
                        "stroke": settings.barSettings.targetsColor.solid.color,
                    });
                if (settings.dataLabels.show) {
                    targetLabelsTextHi
                        .enter()
                        .append('text')
                        .classed('targetLabelsTextHi', true);
                    targetLabelsTextHi
                        .attr({
                            x: d => {
                                return settings.dataLabels.targetsAlignBarLabels ? getTextPositionX(viewModel.maxValue, null) : getTextPositionX(Math.max(<number>d.targetsHighlighted, <number>d.actualsHighlighted/* +<number>d.actuals2Highlighted */), null)
                            },
                            y: d => getTextPositionY(d.category, labelsTextProperties),
                            height: y.rangeBand(),
                            'font-size': labelsFontSize,
                            fill: settings.dataLabels.targetsTextColor.solid.color,
                        })
                        .text(d => String((d.targetsHighlighted ? d.targetsHighlighted : "") + d.actualVsTargetHighlighted));
                }
                else {
                    targetLabelsTextHi.remove();
                    targetLabelsRectHi.remove();
                };
            }
            else {
                targetRectsHi.remove();
                targetLabelsRectHi.remove();
                targetLabelsTextHi.remove();
            };

            this.svg.on('contextmenu', () => {
                const mouseEvent: MouseEvent = d3.event as MouseEvent;
                const eventTarget: EventTarget = mouseEvent.target;
                let dataPoint = d3.select(eventTarget).datum();
                this.selectionManager.showContextMenu(dataPoint ? dataPoint.identity : {}, {
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY,
                });
                mouseEvent.preventDefault();
            });

            actualsRects.on('contextmenu', () => {
                const mouseEvent: MouseEvent = d3.event as MouseEvent;
                const eventTarget: EventTarget = mouseEvent.target;
                let dataPoint = d3.select(eventTarget).datum();
                this.selectionManager.showContextMenu(dataPoint ? dataPoint.actualsIdentity : {}, {
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY,
                });
                mouseEvent.preventDefault();
            });

            actualsRectsHi.on('contextmenu', () => {
                const mouseEvent: MouseEvent = d3.event as MouseEvent;
                const eventTarget: EventTarget = mouseEvent.target;
                let dataPoint = d3.select(eventTarget).datum();
                this.selectionManager.showContextMenu(dataPoint ? dataPoint.actualsIdentity : {}, {
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY,
                });
                mouseEvent.preventDefault();
            });

            targetLabelsText.on('contextmenu', () => {
                const mouseEvent: MouseEvent = d3.event as MouseEvent;
                const eventTarget: EventTarget = mouseEvent.target;
                let dataPoint = d3.select(eventTarget).datum();
                this.selectionManager.showContextMenu(dataPoint ? dataPoint.targetsIdentity : {}, {
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY,
                });
                mouseEvent.preventDefault();
            });

            targetLabelsTextHi.on('contextmenu', () => {
                const mouseEvent: MouseEvent = d3.event as MouseEvent;
                const eventTarget: EventTarget = mouseEvent.target;
                let dataPoint = d3.select(eventTarget).datum();
                this.selectionManager.showContextMenu(dataPoint ? dataPoint.targetsIdentity : {}, {
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY,
                });
                mouseEvent.preventDefault();
            });

            this.syncSelectionState(actualsRects, this.selectionManager.getSelectionIds() as ISelectionId[]);
            this.syncSelectionState(actualsLabelsText, this.selectionManager.getSelectionIds() as ISelectionId[]);
            this.syncSelectionState(targetRects, this.selectionManager.getSelectionIds() as ISelectionId[]);
            this.syncSelectionState(targetLabelsText, this.selectionManager.getSelectionIds() as ISelectionId[]);

            let self: this = this;
            bars
                .on('click', (d) => {
                    this.selectionManager
                        .select(d.actualsIdentity, (d3.event as MouseEvent).ctrlKey)
                        .then((ids: ISelectionId[]) => {
                            self.syncSelectionState(actualsRects, ids);
                            self.syncSelectionState(actualsLabelsText, ids);
                            self.syncSelectionState(targetRects, ids);
                            self.syncSelectionState(targetLabelsText, ids);
                        });
                });

            this.tooltipServiceWrapper.addTooltip(this.barContainer.selectAll('.bar'),
                (tooltipEvent: TooltipEventArgs<DataPoint>) => this.getTooltipData(tooltipEvent.data),
                (tooltipEvent: TooltipEventArgs<DataPoint>) => tooltipEvent.data.actualsIdentity
            );

            bars
                .exit()
                .remove();

            function getTextPositionX(value, width) {
                return x(<number>value) > width ? x(<number>value) + 8 : width + 12;
            };
            function getTextPositionY(category, textProperties) {
                return y(category) + y.rangeBand() / 2 + textMeasurementService.measureSvgTextHeight(textProperties) / 4;
            };
        }

        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {

            let objectName = options.objectName;
            let objectEnumeration: VisualObjectInstance[] = [];

            switch (objectName) {

                case "yAxis":
                    objectEnumeration.push({
                        objectName: objectName,
                        properties: {
                            show: this.VisualSettings.yAxis.show,
                            textColor: this.VisualSettings.yAxis.textColor,
                            fontSize: this.VisualSettings.yAxis.fontSize,
                            maxWidth: this.VisualSettings.yAxis.maxWidth,
                        },
                        validValues: {
                            maxWidth: {
                                numberRange: {
                                    min: 10,
                                    max: 50,
                                }
                            }
                        },
                        selector: null,
                    });
                    break;

                case "xAxis":
                    objectEnumeration.push({
                        objectName: objectName,
                        properties: {
                            show: this.VisualSettings.xAxis.show,
                            textColor: this.VisualSettings.xAxis.textColor,
                            fontSize: this.VisualSettings.xAxis.fontSize,
                        },
                        selector: null,
                    });
                    break;

                case "barSettings":
                    objectEnumeration.push({
                        objectName: objectName,
                        properties: {
                            actualsColor: this.VisualSettings.barSettings.actualsColor,
                            targetsLineStroke: this.VisualSettings.barSettings.targetsLineStroke,
                            targetsColor: this.VisualSettings.barSettings.targetsColor,
                            setMinBarHeight: this.VisualSettings.barSettings.setMinBarHeight,
                        },
                        validValues: {
                            targetsLineStroke: {
                                numberRange: {
                                    min: 1,
                                    max: 5,
                                },
                            },
                        },
                        selector: null,
                    });

                    if (this.VisualSettings.barSettings.setMinBarHeight) {
                        objectEnumeration.push({
                            objectName: objectName,
                            properties: {
                                height: this.VisualSettings.barSettings.height,
                            },
                            validValues: {
                                height: {
                                    numberRange: {
                                        min: 20,
                                        max: 200,
                                    },
                                },
                            },
                            selector: null,
                        });
                    }

                    break;

                case "dataLabels":
                    objectEnumeration.push({
                        objectName: objectName,
                        properties: {
                            show: this.VisualSettings.dataLabels.show,
                            fontSize: this.VisualSettings.dataLabels.fontSize,
                            actualsTextColor: this.VisualSettings.dataLabels.actualsTextColor,
                            targetsTextColor: this.VisualSettings.dataLabels.targetsTextColor,
                            targetsAlignBarLabels: this.VisualSettings.dataLabels.targetsAlignBarLabels,
                        },
                        validValues: {
                            targetsLineStroke: {
                                numberRange: {
                                    min: 1,
                                    max: 5,
                                },
                            },
                        },
                        selector: null,
                    });
                    break;

                case 'units':
                    objectEnumeration.push({
                        objectName: objectName,
                        properties: {
                            show: this.VisualSettings.units.show,
                            decimalPlaces: this.VisualSettings.units.decimalPlaces,
                        },
                        selector: null,
                    });
                    break;

                case 'legend':

                    objectEnumeration.push({
                        objectName: objectName,
                        properties: {
                            "show": this.VisualSettings.legend.show,
                            "position": this.VisualSettings.legend.position,
                            "showTitle": this.VisualSettings.legend.showTitle,
                            "titleText": this.VisualSettings.legend.titleText,
                            "labelColor": this.VisualSettings.legend.labelColor,
                            "fontSize": this.VisualSettings.legend.fontSize
                        },
                        selector: null
                    });

                    break;

            };

            return objectEnumeration;
        }

        private isSelectionIdInArray(selectionIds: ISelectionId[], selectionId: ISelectionId): boolean {
            if (!selectionIds || !selectionId) {
                return false;
            }

            return selectionIds.some((currentSelectionId: ISelectionId) => {
                return currentSelectionId.includes(selectionId);
            });
        }

        private syncSelectionState(selection: d3.Selection<DataPoint>, selectionIds: ISelectionId[]): void {
            if (!selection || !selectionIds) {
                return;
            }

            if (!selectionIds.length) {
                selection.style("fill-opacity", null);
                selection.style("stroke-opacity", null);
                return;
            }

            const self: this = this;

            selection.each(function (barDataPoint: DataPoint) {
                const isSelected: boolean = self.isSelectionIdInArray(selectionIds, barDataPoint.actualsIdentity);

                d3.select(this)
                    .style(
                        "fill-opacity",
                        isSelected
                            ? Visual.Config.solidOpacity
                            : Visual.Config.transparentOpacity
                    )
                    .style(
                        "stroke-opacity",
                        isSelected
                            ? Visual.Config.solidOpacity
                            : Visual.Config.transparentOpacity
                    );
            });
        }

        private getTooltipData(value: any): VisualTooltipDataItem[] {
            let tooltip = [];

            tooltip.push({
                displayName: value.category,
                value: value.formattedValue,
            });

            value.tooltip.forEach(element => {
                tooltip.push({ displayName: element.displayName, value: (typeof (element.value) === "string" ? (element.value || 0).toString() : (this.VisualSettings.units.decimalPlaces != null ? parseFloat(element.value).toFixed(this.VisualSettings.units.decimalPlaces) : element.value)) });
            });

            return tooltip;
        }
    }

    function getIndexForDataMax(arr) {
        let i = 0;
        let p = 0;
        let max = arr[i].value;
        for (i = 1; i < arr.length; i++) {

            if (arr[i].value > max) {
                max = arr[i].value;
                p = i;
            }
        }
        return p;
    }
}