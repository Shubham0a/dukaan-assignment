import { FunctionComponent } from "react";
import TypeDefaultSizeDefault from "./TypeDefaultSizeDefault";
import TypeTextRegular from "./TypeTextRegular";
import TypeLink from "./TypeLink";
import StrokeBlack90 from "./StrokeBlack90";
import Pagination from "./Pagination";
import styles from "./TransactionFilterContainer.module.css";

const TransactionFilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.template3}>
      <div />
      <div className={styles.frameParent}>
        <div className={styles.inputSearchBoxParent}>
          <TypeDefaultSizeDefault
            orderIDPhoneOrAName="Search by order ID..."
            boldCross="/bold--cross.svg"
            typeDefaultSizeDefaultWidth="248px"
            orderIDPhoneFontFamily="Inter"
          />
          <div className={styles.filtersParent}>
            <div className={styles.filters}>
              <div className={styles.placeholderText}>Filter</div>
              <img
                className={styles.outlinedFilters}
                alt=""
                src="/outlined--filters@2x.png"
              />
            </div>
            <div className={styles.filtersParent}>
              <div className={styles.filters}>
                <div className={styles.placeholderText}>Filter</div>
                <img
                  className={styles.outlinedFilters}
                  alt=""
                  src="/outlined--filters@2x.png"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.filtersParent}>
                  <div className={styles.buttonSort}>
                    <div className={styles.placeholderText}>Sort</div>
                    <img
                      className={styles.outlinedSort}
                      alt=""
                      src="/outlined--sort.svg"
                    />
                  </div>
                  <div className={styles.filters}>
                    <div className={styles.placeholderText}>Filter</div>
                    <img
                      className={styles.outlinedFilters}
                      alt=""
                      src="/outlined--filters@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.iconsdownload}
                    alt=""
                    src="/iconsdownload.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <img
            className={styles.controlsCheckBox}
            alt=""
            src="/controls--check-box.svg"
          />
          <div className={styles.cellHeaderRow}>
            <div className={styles.textIcon}>
              <TypeTextRegular
                thumbnail="/thumbnail@2x.png"
                controlsCheckBox="/controls--check-box.svg"
                outlinedWhatsApp="/outlined--whatsapp.svg"
                text="Order ID"
                outlinedWhatsApp1="/outlined--whatsapp.svg"
                infoTag={false}
                image={false}
                iconRight={false}
                twoLineText={false}
                italics={false}
                iconLeft={false}
                threeLineText={false}
                checkbox={false}
                strikeThrough={false}
                sampleDataFontFamily="Inter"
                sampleDataFontWeight="500"
                sampleDataTextAlign="left"
                sampleDataColor="#4d4d4d"
              />
              <img
                className={styles.triangleIcon}
                alt=""
                src="/triangleicon.svg"
              />
            </div>
            <div className={styles.resizableSpacer}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.cellHeaderRow1}>
            <div className={styles.textIcon}>
              <TypeTextRegular
                thumbnail="/thumbnail@2x.png"
                controlsCheckBox="/controls--check-box.svg"
                outlinedWhatsApp="/outlined--whatsapp.svg"
                text="Order status"
                outlinedWhatsApp1="/outlined--whatsapp.svg"
                infoTag={false}
                image={false}
                iconRight={false}
                twoLineText={false}
                italics={false}
                iconLeft={false}
                threeLineText={false}
                checkbox={false}
                strikeThrough={false}
                sampleDataFontFamily="'Galano Grotesque'"
                sampleDataFontWeight="500"
                sampleDataTextAlign="left"
                sampleDataColor="#4d4d4d"
              />
              <img
                className={styles.triangleIcon}
                alt=""
                src="/triangleicon.svg"
              />
            </div>
            <div className={styles.resizableSpacer}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.cellHeaderRow}>
            <div className={styles.textIcon}>
              <TypeTextRegular
                thumbnail="/thumbnail@2x.png"
                controlsCheckBox="/controls--check-box.svg"
                outlinedWhatsApp="/outlined--whatsapp.svg"
                text="Order date"
                outlinedWhatsApp1="/outlined--whatsapp.svg"
                infoTag={false}
                image={false}
                iconRight={false}
                twoLineText={false}
                italics={false}
                iconLeft={false}
                threeLineText={false}
                checkbox={false}
                strikeThrough={false}
                sampleDataFontFamily="Inter"
                sampleDataFontWeight="500"
                sampleDataTextAlign="left"
                sampleDataColor="#4d4d4d"
              />
              <img
                className={styles.triangleIcon2}
                alt=""
                src="/triangleicon.svg"
              />
            </div>
            <div className={styles.resizableSpacer}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.cellHeaderRow3}>
            <div className={styles.textIcon}>
              <TypeTextRegular
                thumbnail="/thumbnail@2x.png"
                controlsCheckBox="/controls--check-box.svg"
                outlinedWhatsApp="/outlined--whatsapp.svg"
                text="Order amount"
                outlinedWhatsApp1="/outlined--whatsapp.svg"
                infoTag={false}
                image={false}
                iconRight={false}
                twoLineText={false}
                italics={false}
                iconLeft={false}
                threeLineText={false}
                checkbox={false}
                strikeThrough={false}
                sampleDataFontFamily="Inter"
                sampleDataFontWeight="500"
                sampleDataTextAlign="right"
                sampleDataColor="#4d4d4d"
              />
              <img
                className={styles.triangleIcon}
                alt=""
                src="/triangleicon.svg"
              />
            </div>
            <div className={styles.resizableSpacer}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.cellHeaderRow3}>
            <div className={styles.resizableSpacer4}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
            <div className={styles.textIconParent}>
              <div className={styles.textIcon}>
                <TypeTextRegular
                  thumbnail="/thumbnail@2x.png"
                  controlsCheckBox="/controls--check-box.svg"
                  outlinedWhatsApp="/outlined--whatsapp.svg"
                  text="Transaction fees"
                  outlinedWhatsApp1="/outlined--whatsapp.svg"
                  infoTag={false}
                  image={false}
                  iconRight={false}
                  twoLineText={false}
                  italics={false}
                  iconLeft={false}
                  threeLineText={false}
                  checkbox={false}
                  strikeThrough={false}
                  sampleDataFontFamily="Inter"
                  sampleDataFontWeight="500"
                  sampleDataTextAlign="right"
                  sampleDataColor="#4d4d4d"
                />
                <img
                  className={styles.triangleIcon}
                  alt=""
                  src="/triangleicon.svg"
                />
              </div>
              <img
                className={styles.outlinedInfo}
                alt=""
                src="/outlined--info.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.column01}>
          <TypeLink
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="#281209 "
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            sampleDataFontFamily="Inter"
          />
          <div className={styles.resizableSpacer5}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column02}>
          <div className={styles.tableType}>
            <div className={styles.tagStatus}>
              <div className={styles.tagStatusChild} />
              <div className={styles.accepted}>Accepted</div>
            </div>
          </div>
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column03}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="7 July, 2023"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="left"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer7}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column05}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹1,278.23"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <div className={styles.column051}>
          <TypeTextRegular
            thumbnail="/thumbnail@2x.png"
            controlsCheckBox="/controls--check-box.svg"
            outlinedWhatsApp="/outlined--whatsapp.svg"
            text="₹22"
            outlinedWhatsApp1="/outlined--whatsapp.svg"
            infoTag={false}
            image={false}
            iconRight={false}
            twoLineText={false}
            italics={false}
            iconLeft={false}
            threeLineText={false}
            checkbox={false}
            strikeThrough={false}
            sampleDataFontFamily="Inter"
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#1a181e"
          />
          <div className={styles.resizableSpacer}>
            <div className={styles.endPoint} />
            <div className={styles.endPoint} />
          </div>
        </div>
        <StrokeBlack90
          imageDimensions="/divider.svg"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="5"
        />
      </div>
      <div className={styles.dataTableParent}>
        <div className={styles.dataTable}>
          <div className={styles.column01}>
            <TypeLink
              thumbnail="/thumbnail@2x.png"
              controlsCheckBox="/controls--check-box.svg"
              outlinedWhatsApp="/outlined--whatsapp.svg"
              text="#281209 "
              outlinedWhatsApp1="/outlined--whatsapp.svg"
              image={false}
              iconRight={false}
              twoLineText={false}
              italics={false}
              iconLeft={false}
              threeLineText={false}
              checkbox={false}
              sampleDataFontFamily="Inter"
            />
            <div className={styles.resizableSpacer5}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.column02}>
            <div className={styles.tableType}>
              <div className={styles.tagStatus}>
                <div className={styles.tagStatusChild} />
                <div className={styles.accepted}>Accepted</div>
              </div>
            </div>
            <div className={styles.resizableSpacer}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.column03}>
            <TypeTextRegular
              thumbnail="/thumbnail@2x.png"
              controlsCheckBox="/controls--check-box.svg"
              outlinedWhatsApp="/outlined--whatsapp.svg"
              text="7 July, 2023"
              outlinedWhatsApp1="/outlined--whatsapp.svg"
              infoTag={false}
              image={false}
              iconRight={false}
              twoLineText={false}
              italics={false}
              iconLeft={false}
              threeLineText={false}
              checkbox={false}
              strikeThrough={false}
              sampleDataFontFamily="Inter"
              sampleDataFontWeight="unset"
              sampleDataTextAlign="left"
              sampleDataColor="#1a181e"
            />
            <div className={styles.resizableSpacer7}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.column05}>
            <TypeTextRegular
              thumbnail="/thumbnail@2x.png"
              controlsCheckBox="/controls--check-box.svg"
              outlinedWhatsApp="/outlined--whatsapp.svg"
              text="₹1,278.23"
              outlinedWhatsApp1="/outlined--whatsapp.svg"
              infoTag={false}
              image={false}
              iconRight={false}
              twoLineText={false}
              italics={false}
              iconLeft={false}
              threeLineText={false}
              checkbox={false}
              strikeThrough={false}
              sampleDataFontFamily="Inter"
              sampleDataFontWeight="unset"
              sampleDataTextAlign="right"
              sampleDataColor="#1a181e"
            />
            <div className={styles.resizableSpacer}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <div className={styles.column051}>
            <TypeTextRegular
              thumbnail="/thumbnail@2x.png"
              controlsCheckBox="/controls--check-box.svg"
              outlinedWhatsApp="/outlined--whatsapp.svg"
              text="₹22"
              outlinedWhatsApp1="/outlined--whatsapp.svg"
              infoTag={false}
              image={false}
              iconRight={false}
              twoLineText={false}
              italics={false}
              iconLeft={false}
              threeLineText={false}
              checkbox={false}
              strikeThrough={false}
              sampleDataFontFamily="Inter"
              sampleDataFontWeight="unset"
              sampleDataTextAlign="right"
              sampleDataColor="#1a181e"
            />
            <div className={styles.resizableSpacer}>
              <div className={styles.endPoint} />
              <div className={styles.endPoint} />
            </div>
          </div>
          <StrokeBlack90
            imageDimensions="/divider.svg"
            strokeBlack90IconWidth="calc(100% - 24px)"
            strokeBlack90IconAlignSelf="stretch"
            strokeBlack90IconPosition="absolute"
            strokeBlack90IconMargin="0 !important"
            strokeBlack90IconRight="12px"
            strokeBlack90IconBottom="-1px"
            strokeBlack90IconLeft="12px"
            strokeBlack90IconMaxWidth="100%"
            strokeBlack90IconOverflow="hidden"
            strokeBlack90IconZIndex="5"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper}>
              <div className={styles.paginationWrapper}>
                <Pagination
                  outlinedSettings="/outlined--settings.svg"
                  outlinedSettings1="/outlined--settings.svg"
                  dots
                  previous
                  next
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilterContainer;
